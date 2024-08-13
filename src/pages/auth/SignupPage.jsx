import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { Button, Form } from 'react-bootstrap';

function SignupPage() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("")
  const [nacionalidad, setNacionalidad] = useState("")
  const [residencia, setResidencia] = useState("")
  const [tiempoNuevoPais, setTiempoNuevoPais] = useState("")
  const [especializacion, setEspecializacion] = useState("")
  const [rol, setRol] = useState("")

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlecontraseñaChange = (e) => setContraseña(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      email,
      contraseña,
      nombreCompleto,
      nacionalidad,
      residencia,
      tiempoNuevoPais,
      especializacion,
      // rol: req.body????
    };

    try {
      await service.post("/auth/registro-usuario", nuevoUsuario);
      console.log("usuario creado")

      navigate("/iniciar-sesion");
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        console.log(error)
        navigate("/error/500");
      }
    }
  };

  return (
    <div className="form-signup">
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={handleEmailChange}
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="contraseña">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="text"
            value={contraseña}
            onChange={handlecontraseñaChange}
          />{" "}
        </Form.Group>

        <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre" >
            <Form.Label>Nombre Completo: </Form.Label>
            <Form.Control
              type="text"
              className="custom-form-control"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
            /></Form.Group>

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

        <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre" >
            <Form.Label>Tiempo en nuevo país: </Form.Label>
            <Form.Control
              type="number"
              className="custom-form-control"
              value={tiempoNuevoPais}
              onChange={(e) => setTiempoNuevoPais(e.target.value)}
            /></Form.Group>

        {/* <Form.Group
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            controlId="formGridNombre" >
            <Form.Check // prettier-ignore
            type="switch"
            value={rol}
            default="user"
            id="custom-switch"
            label="Soy psicologo"
            onChange={(e) => setRol(e.target.value)}
          /></Form.Group> */}

        <br />

        <Button variant="dark" type="submit">
          Registrarse
        </Button>

        {errorMessage && <p>{errorMessage}</p>}
      </Form>
    </div>
  );
}

export default SignupPage;
