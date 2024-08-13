import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { Button, Form, Alert, Container, Row, Col, Card } from 'react-bootstrap'; // Import Container, Row, Col, and Card for styling
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

    if (!email || !contraseña) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    const credentials = {
      email,
      contraseña,
    };

    try {
      const response = await service.post("/auth/iniciar-sesion", credentials);
      console.log(response);

      localStorage.setItem("authToken", response.data.authToken);
      usuarioAutenticado();
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error/500");
      }
    }
  };

  return (
    <div className="fondo-signup d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="signup-card">
              <h2>Iniciar Sesión</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 mt-4" controlId="email">
                  <Form.Label>Correo Electrónico:</Form.Label>
                  <Form.Control
                    type="email"
                    className="signup-form-control"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Introduce tu correo electrónico"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    className="signup-form-control"
                    value={contraseña}
                    onChange={handlecontraseñaChange}
                    placeholder="Introduce tu contraseña"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="w-100">
                  Iniciar Sesión
                </Button>

                {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
              </Form>
              <Card.Text className="text-center mt-3">
                ¿No tienes una cuenta? <Card.Link href="/registro">Regístrate aquí</Card.Link>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
