import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";  // Añadimos useLocation
import { AuthContext } from "../context/auth.context";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/MentEmigrante-logo.png";

function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();  // Obtenemos la ubicación actual
  const { estaLoggeado, usuarioAutenticado, isUsuario } = useContext(AuthContext);

  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    // Cambia el color de fondo según la ruta actual
    const updateNavbarColor = () => {
      switch (location.pathname) {
        case "/":
          setNavbarColor("transparent");  // Ruta principal, transparente
          break;
        default:
          setNavbarColor("#B43F3F");  // Color para las demás rutas
          break;
      }
    };

    updateNavbarColor();  // Llamamos a la función al cargar la página

    // También cambiar el color al hacer scroll si es la ruta principal
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (location.pathname === "/" && scrollPosition > 50) {
        setNavbarColor("#B43F3F");
      } else if (location.pathname === "/") {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);  // Dependemos de la ubicación actual

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    usuarioAutenticado();
    navigate("/iniciar-sesion");
  };

  return (
    <Navbar
      collapseOnSelect
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
              {!estaLoggeado && (
                <Nav.Link as={Link} to="/sobre-nosotros">
                  Sobre nosotros
                </Nav.Link>
              )}
            </div>
            <div className="d-flex align-items-center">
              {!estaLoggeado && (
                <>
                  <Button
                    className="login-button"
                    style={{ borderColor: "#901c1c", background: "transparent" }}
                    as={Link}
                    to="/iniciar-sesion"
                  >
                    Iniciar Sesion
                  </Button>
                  <Button
                    className="registro-btn"
                    style={{ borderColor: "#901c1c", background: "#901c1c", margin: "8px" }}
                    as={Link}
                    to="/registro"
                  >
                    Registro
                  </Button>
                </>
              )}
            </div>
            {estaLoggeado && (
              <>
                <Nav.Link as={Link} to="/talleres">
                  Talleres
                </Nav.Link>
                <Nav.Link as={Link} to="/usuarios">
                  Usuarios
                </Nav.Link>
                <Nav.Link as={Link} to="/psicologos">
                  Psicologos
                </Nav.Link>
                <NavDropdown title="Perfil" className="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/perfil">
                    Ver perfil
                  </NavDropdown.Item>
                  {isUsuario && (
                    <NavDropdown.Item as={Link} to="/tablero-creativo/crear">
                      Crear tablero
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item
                    className="cerrarSesion"
                    type="submit"
                    onClick={handleLogout}
                  >
                    <span>Cerrar sesión</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
