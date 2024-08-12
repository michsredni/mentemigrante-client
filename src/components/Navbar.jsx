import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../assets/MentEmigrante-logo.png";

function MyNavbar() {
  const navigate = useNavigate();
  const { estaLoggeado, usuarioAutenticado } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    usuarioAutenticado();
    navigate("/iniciar-sesion");
  };

  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
      id="navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="mr-5">
          <img className="logo" src={logo} alt="logo" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-5 w-100 justify-content-between">
            {!estaLoggeado && <Nav.Link as={Link} to="/registro">Registro</Nav.Link>}
            {!estaLoggeado && <Nav.Link as={Link} to="/iniciar-sesion">Iniciar Sesion</Nav.Link>}
            {!estaLoggeado && <Nav.Link as={Link} to="/sobre-nosotros">Sobre nosotros</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/psicologos">Psicologos</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/talleres">Talleres</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/tablero-creativo/crear">Crear tablero</Nav.Link>}
            {estaLoggeado && (
              <Button className="cerrarSesionButton" type="submit" onClick={handleLogout}>
                <span>Cerrar sesión</span>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
