import React, { useEffect, useState } from 'react'
import service from '../service/service.config';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Card } from "react-bootstrap";

function EditTaller() {

  const params = useParams()
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [imageUrl, setImageUrl] = useState(""); 
  const [isUploading, setIsUploading] = useState(false); 
  const [descripcion, setDescripcion] = useState("")
  const [duracion, setDuracion] = useState("")

  useEffect(() => {
  getTaller()
  }, [])

  const getTaller = async () => {
    try {
      const response = await service.get(`/talleres/${params.tallerId}`)
      console.log(response.data)
      setNombre(response.data.nombre)
      setImageUrl(response.data.imageUrl)
      setDuracion(response.data.duracion)
      setDescripcion(response.data.descripcion)
    } catch (error) {
      console.log(error)
    }
  }

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
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const tallerEditado = {
      nombre,
      imagen: imageUrl,
      descripcion,
      duracion
    }

    try {
      await service.put(`/talleres/${params.tallerId}`, tallerEditado)
      navigate("/talleres")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Card border="dark" style={{ width: "100%" }}>
        <h3 className="my-4">Editar taller</h3>
        <Form onSubmit={handleEditSubmit}>
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

          <Button variant="dark" type="submit" className="mb-5" disabled={isUploading} >
            Guardar cambios
          </Button>

        </Form>
      </Card>
    </div>
  )
}

export default EditTaller