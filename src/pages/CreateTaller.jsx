import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import service from "../service/service.config";

function CreateTaller() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [duracion, setDuracion] = useState("");
  const [usuarios, setUsuarios] = useState([]);
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
    const nuevoTaller = {
      nombre,
      descripcion,
      duracion,
      imagen: imageUrl,
      usuarios
    };

    try {
      await service.post("/talleres", nuevoTaller);
      navigate("/talleres");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="crear-taller-div">
      <Card style={{ width: "90%" }}>
        <h3 className="my-4">Crea tu Taller</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre"
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridDescripcion"
          >
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Introduce una breve explicación del taller"
              className="custom-form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridDuracion"
          >
            <Form.Label>Duración</Form.Label>
            <Form.Control
              type="number"
              placeholder="Introduce el tiempo de duración"
              className="custom-form-control"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridImagen"
          >
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
          
          <Button type="submit" className="mb-5 crear-taller-btn" disabled={isUploading || !imageUrl}>
            Crear
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateTaller;
