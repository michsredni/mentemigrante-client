import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateTaller() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState("")
  const [tallerDescripcion, setTallerDescripcion] = useState("")
  const [duracion, setDuracion] = useState("")
  const [imagen, setImagen] = useState("")
  const [usuarios, setUsuarios] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoTaller = {
      nombre,
      tallerDescripcion,
      duracion,
      imagen,

      usuarios,
    };

    try {
      await service.post("/talleres", nuevoTaller);
      navigate("/talleres");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h2>Crea un Taller</h2>
      <Card border="dark" style={{ width: "100%" }}>
        <h3 className="my-4">Crea tu Tablero</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-5" controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-5" controlId="formGridDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Introduce una breve explicación del tablero"
              className="custom-form-control"
              value={tallerDescripcion}
              onChange={(e) => setTallerDescripcion(e.target.value)}
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
          <Button variant="dark" type="submit" className="mb-5">
            Crear
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default CreateTaller