import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { Button, Form } from 'react-bootstrap';

function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlecontraseñaChange = (e) => setContraseña(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      email,
      contraseña,
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
        navigate("/error/500");
      }
    }
  };

  return (
    <div>
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
