import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Container, Nav, Navbar, Button, Image, NavDropdown } from "react-bootstrap";
import logo from "../assets/MentEmigrante-logo.png";

import profilePic from "../assets/profile-pic.webp"

function MyNavbar() {
  const navigate = useNavigate();
  const { estaLoggeado, usuarioAutenticado, isUsuario } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    usuarioAutenticado();
    navigate("/iniciar-sesion");
  };

  return (
    <Navbar collapseOnSelect
      data-bs-theme="dark"
      expand="lg"
      fixed="top"
      id="navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="mr-5">
          <img className="logo" src={logo} alt="logo" width="100px" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="pl-5 w-100 justify-content-between">
            {!estaLoggeado && <Nav.Link as={Link} to="/sobre-nosotros">Sobre nosotros</Nav.Link>}
            {!estaLoggeado && <Nav.Link as={Link} to="/registro">Registro</Nav.Link>}
            {!estaLoggeado && <Nav.Link as={Link} to="/iniciar-sesion">Iniciar Sesion</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/talleres">Talleres</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>}
            {estaLoggeado && <Nav.Link as={Link} to="/psicologos">Psicologos</Nav.Link>}
            <NavDropdown title="Perfil" id="basic-nav-dropdown">
              {estaLoggeado && <NavDropdown.Item as={Link} to="/perfil">Ver perfil</NavDropdown.Item>}
              {isUsuario && <NavDropdown.Item as={Link} to="/tablero-creativo/crear">Crear tablero</NavDropdown.Item>}
              {estaLoggeado && ( <NavDropdown.Item className="cerrarSesion" type="submit" onClick={handleLogout}>
                <span>Cerrar sesión</span></NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
