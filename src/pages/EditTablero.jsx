import React, { useEffect, useState } from "react";
import service from "../service/service.config";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Canvas from "../components/Canvas";

function EditTablero() {
  
  const params = useParams(); 
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 
  const [isUploading, setIsUploading] = useState(false); 
  const [canvasImage, setCanvasImage] = useState("");

  useEffect(() => {
    getTablero(); 
  }, []);

  const getTablero = async () => {

    try {
      const response = await service.get(`/tableros/${params.tableroId}`); 
      console.log(response.data);
      setTitulo(response.data.titulo);
      setDescripcion(response.data.descripcion);
      setImageUrl(response.data.imagen);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (event) => {
    if (!event.target.files[0]) {
        return; // Si no se selecciona un archivo, no se hace nada. El return nos saca del handle.
    }

    // En caso de que hayamos seleccionado una nueva imagen, seguimos adelante como siempre.

    setIsUploading(true); 

    const uploadData = new FormData(); 
    uploadData.append("image", event.target.files[0]); // Subimos la imagen nueva
  
    try {
        const response = await service.post("/upload", uploadData); 
        setImageUrl(response.data.imageUrl); // Actualizamos `imageUrl` con la nueva imagen subida
        setIsUploading(false); 
    } catch (error) {
        console.error("Error uploading the image", error);
        setIsUploading(false); 
    }
};


  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const tableroEditado = {
      titulo,
      descripcion,
      imagen: canvasImage || imageUrl
    };

   
    try {
      await service.put(`/tableros/${params.tableroId}`, tableroEditado); 
      navigate("/perfil");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card border="dark" style={{ width: "100%" }}>
        <h3 className="my-4">Edita tu Tablero</h3>
        <Form onSubmit={handleEditSubmit}>
          <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-5" controlId="formGridTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-5" controlId="formGridDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Introduce una breve explicación del tablero"
              className="custom-form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-5" controlId="formGridImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              className="custom-form-control"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
          </Form.Group>
          <Canvas />
          <Button variant="dark" type="submit" className="mb-5" disabled={isUploading} >
            Editar
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditTablero;
