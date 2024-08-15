import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/MentEmigrante-logo.png";

function MyNavbar() {
  const navigate = useNavigate();
  const { estaLoggeado, usuarioAutenticado, isUsuario } = useContext(AuthContext);

  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor(estaLoggeado ? "#B43F3F" : "#B43F3F");
      } else {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [estaLoggeado]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    usuarioAutenticado();
    navigate("/iniciar-sesion");
  };

  return (
    <Navbar collapseOnSelect
      expand="lg"
      fixed="top"
      id="navbar"
      style={{ backgroundColor: navbarColor, transition: "background-color 0.3s ease" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="mr-5">
          <img className="logo" src={logo} alt="logo" width="100px" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="w-100">
            <div className="me-auto">
              {!estaLoggeado && <Nav.Link as={Link} to="/sobre-nosotros">Sobre nosotros</Nav.Link>}
            </div>
            <div className="d-flex align-items-center">
              {!estaLoggeado && <Button className="login-button" style={{ borderColor: '#901c1c', background: 'transparent' }} as={Link} to="/iniciar-sesion">Iniciar Sesion</Button>}
              {!estaLoggeado && <Button className="registro-btn" style={{ borderColor: '#901c1c', background: '#901c1c', margin: "8px"}} as={Link} to="/registro">Registro</Button>}
            </div>
              {estaLoggeado && <Nav.Link as={Link} to="/talleres">Talleres</Nav.Link>}
              {estaLoggeado && <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>}
              {estaLoggeado && <Nav.Link as={Link} to="/psicologos">Psicologos</Nav.Link>}
              {estaLoggeado && (
                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/perfil">Ver perfil</NavDropdown.Item>
                  {isUsuario && <NavDropdown.Item as={Link} to="/tablero-creativo/crear">Crear tablero</NavDropdown.Item>}
                  <NavDropdown.Item className="cerrarSesion" type="submit" onClick={handleLogout}>
                    <span>Cerrar sesión</span>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
