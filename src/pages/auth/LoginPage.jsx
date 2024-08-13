import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { Button, Form } from 'react-bootstrap';
import service from "../../service/service.config";


function LoginPage() {
  const { usuarioAutenticado } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlecontraseñaChange = (e) => setContraseña(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const credencialesUsuario = {
      email,
      contraseña,
    };

    try {
      const response = await service.post(
        "/auth/iniciar-sesion",
        credencialesUsuario
      );
      console.log(response);

      localStorage.setItem("authToken", response.data.authToken);

      usuarioAutenticado();

      navigate("/");
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
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={handleEmailChange}
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="contraseña">
          <Form.Label>Contraseña :</Form.Label>
          <Form.Control
            type="password"
            value={contraseña}
            onChange={handlecontraseñaChange}
          />{" "}
        </Form.Group>

        <br />

        <Button variant="dark" type="submit">
          Iniciar Sesion
        </Button>

        {errorMessage && <p>{errorMessage}</p>}
      </Form>
    </div>
  );
}

export default LoginPage;
