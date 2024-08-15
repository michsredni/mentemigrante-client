import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Card, Container } from "react-bootstrap";
import service from '../service/service.config';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function EditProfileFormPage() {

    const {isPsico} = useContext(AuthContext)

    const [imageUrl, setImageUrl] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const [nacionalidad, setNacionalidad] = useState("")
    const [residencia, setResidencia] = useState("")
    const [tiempoNuevoPais, setTiempoNuevoPais] = useState("")
    const [especializacion, setEspecializacion] = useState("")
    const [mesesNuevoPais, setMesesNuevoPais] = useState("");
    const [anosNuevoPais, setAnosNuevoPais] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
          const response = await service.get("/usuarios/propio");
          // console.log(response.data);
          setImageUrl(response.data.imageUrl)
          setNacionalidad(response.data.nacionalidad)
          setResidencia(response.data.residencia)
          setTiempoNuevoPais(response.data.tiempoNuevoPais)
          setEspecializacion(response.data.especializacion)
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
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const perfilEditado = {
            imagen: imageUrl,
            nacionalidad,
            residencia,
            tiempoNuevoPais,
            especializacion
        }

        if (mesesNuevoPais && anosNuevoPais) {
          perfilEditado.tiempoNuevoPais = `${anosNuevoPais} años y ${mesesNuevoPais} meses`;
        }
    
        if (!mesesNuevoPais && anosNuevoPais) {
          perfilEditado.tiempoNuevoPais = `${anosNuevoPais} años`;
        }
    
        if (mesesNuevoPais && !anosNuevoPais) {
          perfilEditado.tiempoNuevoPais = `${mesesNuevoPais} meses`;
        }

        try {
            await service.put("/usuarios/propio", perfilEditado)
            navigate("/perfil")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <Container>
        <Card style={{ width: "100%" }}>
        <h3 className="my-4">Mi perfil</h3>
        <Form onSubmit={handleEditSubmit}>

            <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-5" controlId="formGridImagen">
            <Form.Label>Imagen: </Form.Label>
            <Form.Control
              type="file"
              className="custom-form-control"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            </Form.Group>
            
            <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre" >
            <Form.Label>Nacionalidad: </Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
            /></Form.Group>

            <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre" >
            <Form.Label>Residencia: </Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={residencia}
              onChange={(e) => setResidencia(e.target.value)}
            /></Form.Group>

            <h6 style={{ marginBottom: "1vw", fontWeight: "normal" }}>Tiempo en nuevo país:</h6>
            <Form.Group
            className="d-flex flex-row justify-content-center align-items-center mb-5"
            controlId="tiempoNuevoPais">
            <Form.Label style={{ marginRight: "1vw" }}>Meses: </Form.Label>
            <Form.Control
              type="number"
              className="custom-form-control"
              value={mesesNuevoPais}
              onChange={(e) => setMesesNuevoPais(e.target.value)}/>

            <Form.Label style={{ marginRight: "1vw", marginLeft: "1vw" }}>Años:{" "}</Form.Label>
              <Form.Control
              type="number"
              className="custom-form-control"
              value={anosNuevoPais}
              onChange={(e) => setAnosNuevoPais(e.target.value)}/>
            </Form.Group>

            {isPsico && <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre" >
            <Form.Label>Especializacion: </Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={especializacion}
              onChange={(e) => setEspecializacion(e.target.value)}
            /></Form.Group>}
            

          <Button variant="dark" type="submit" className="mb-5" disabled={isUploading || !imageUrl}>
            Guardar
          </Button>
        </Form>
      </Card>

      </Container>
        
    </div>
  )
}

export default EditProfileFormPage