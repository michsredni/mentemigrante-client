import React, { useState } from "react";
import service from "../service/service.config";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateTablero() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 
  const [isUploading, setIsUploading] = useState(false); 

  const handleFileUpload = async (event) => {
    if (!event.target.files[0]) {
      return;
    }
  
    setIsUploading(true); 
  
    const uploadData = new FormData(); 
    uploadData.append("image", event.target.files[0]);
  
    try {
      const response = await service.post("/upload", uploadData);
  
      setImageUrl(response.data.imageUrl);
      setIsUploading(false); 
    } catch (error) {
      console.error("Error uploading the image", error);
      setIsUploading(false); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoTablero = {
      titulo,
      descripcion,
      imagen: imageUrl, 
    };

    try {
      await service.post("/tableros", nuevoTablero);
      navigate("/perfil");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Tablero de expresión creativa</h1>
      <br />
      <p>
        En esta sección, nuestros usuarios pueden subir dibujos, fotografías u
        otras formas de arte que les permitan expresar sus emociones y narrar
        sus historias de resistencia. Este espacio busca promover una visión
        diversa y justa de las experiencias migrantes y racializadas, celebrando
        la riqueza cultural y la resiliencia a través de la creatividad.
      </p>
      <Card border="dark" style={{ width: "100%"}}>
        <h3 className="my-4">Crea tu Tablero</h3>
        <Form onSubmit={handleSubmit}>
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
          <Button variant="dark" type="submit" className="mb-5" disabled={isUploading || !imageUrl} >
            Crear
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateTablero;
