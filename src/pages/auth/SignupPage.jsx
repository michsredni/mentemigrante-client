import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function SignupPage() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [residencia, setResidencia] = useState("");
  const [mesesNuevoPais, setMesesNuevoPais] = useState("");
  const [anosNuevoPais, setAnosNuevoPais] = useState("");

  const [especializacion, setEspecializacion] = useState("");
  const [rol, setRol] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContraseñaChange = (e) => setContraseña(e.target.value);
  const handleRolChange = (e) => setRol(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      email,
      contraseña,
      nombreCompleto,
      nacionalidad,
      residencia,
      especializacion,
      rol,
    };

    if (mesesNuevoPais && anosNuevoPais) {
      nuevoUsuario.tiempoNuevoPais = `${anosNuevoPais} años y ${mesesNuevoPais} meses`;
    }

    if (!mesesNuevoPais && anosNuevoPais) {
      nuevoUsuario.tiempoNuevoPais = `${anosNuevoPais} años`;
    }

    if (mesesNuevoPais && !anosNuevoPais) {
      nuevoUsuario.tiempoNuevoPais = `${mesesNuevoPais} meses`;
    }

    try {
      await service.post("/auth/registro-usuario", nuevoUsuario);
      console.log("usuario creado");

      navigate("/iniciar-sesion");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        console.log(error);
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
              <h2>Registro</h2>
              <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3 mt-4" controlId="email">
                  <Form.Label>Correo Electrónico:</Form.Label>
                  <Form.Control
                    type="email"
                    className="signup-form-control"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contraseña">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    className="signup-form-control"
                    value={contraseña}
                    onChange={handleContraseñaChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombreCompleto">
                  <Form.Label>Nombre Completo:</Form.Label>
                  <Form.Control
                    type="text"
                    className="signup-form-control"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nacionalidad">
                  <Form.Label>Nacionalidad:</Form.Label>
                  <Form.Control
                    type="text"
                    className="signup-form-control"
                    value={nacionalidad}
                    onChange={(e) => setNacionalidad(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="residencia">
                  <Form.Label>Residencia:</Form.Label>
                  <Form.Control
                    type="text"
                    className="signup-form-control"
                    value={residencia}
                    onChange={(e) => setResidencia(e.target.value)}
                  />
                </Form.Group>

                <h6 style={{ marginBottom: "1vw", fontWeight: "normal" }}>
                  Tiempo en nuevo país
                </h6>
                <Form.Group
                  className="d-flex flex-row justify-content-center align-items-center mb-5"
                  controlId="tiempoNuevoPais"
                >
                  <Form.Label style={{ marginRight: "1vw" }}>Meses: </Form.Label>
                  <Form.Control
                    type="number"
                    className="signup-form-control"
                    value={mesesNuevoPais}
                    onChange={(e) => setMesesNuevoPais(e.target.value)}
                  />

                  <Form.Label style={{ marginRight: "1vw", marginLeft: "1vw" }}>
                    Años:{" "}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="signup-form-control"
                    value={anosNuevoPais}
                    onChange={(e) => setAnosNuevoPais(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rol">
                  <Form.Label>Selecciona tu rol:</Form.Label>
                  <Form.Select
                    onChange={handleRolChange}
                    aria-label="Default select example"
                    className="signup-form-control"
                  >
                    <option>Selecciona tu rol</option>
                    <option value="user">Usuario</option>
                    <option value="psicologo">Psicologo</option>
                  </Form.Select>
                </Form.Group>

                <Button type="submit" className="w-100">
                  Registrarse
                </Button>

                {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
              </Form>
              <Card.Text className="text-center mt-3">
                Haciendo click en el botón de registrarse, aceptas nuestros{" "}
                <Card.Link href="#">Términos y Condiciones</Card.Link> y nuestra{" "}
                <Card.Link href="#">Política de Privacidad</Card.Link>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignupPage;
