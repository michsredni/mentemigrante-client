import { useContext, React} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Container, Nav } from "react-bootstrap";
import logo from "../images/MentEmigrante-logo.png"

function Navbar() {
  const navigate = useNavigate()

  const { estaLoggeado, usuarioAutenticado } = useContext(AuthContext)

  const handleLogout = () => {

    // 1. borramos el token de localstorage
    localStorage.removeItem("authToken")

    // 2. forzamos los estados a cambiar a false y null
    usuarioAutenticado()

    // 3. redireccionamos a cualquier pagina publica o login
    navigate("/iniciar-sesion")

  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sobre-nosotros">Sobre nosotros</Link>

      <Navbar expand="lg" sticky="top" id="navbar">
      <Container>
        <Navbar.Brand  as={Link} to="/"><img src= {logo} alt="logo" width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* {!estaLoggeado && <Link to="/registro">Registro</Link>}
            {!estaLoggeado && <Link to="/iniciar-sesion">Iniciar Sesion</Link>}
            {estaLoggeado && <Link to="/perfil">Perfil</Link>}
            {estaLoggeado && <Link to="/talleres">Talleres</Link>}
            {estaLoggeado && <Link to="/tablero-creativo/crear">Crear tablero</Link>}
            {estaLoggeado && <button onClick={handleLogout}><span>Cerrar sesión</span></button> } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* {isAdmin && <Link to="/admin">Solo Admin</Link>} */}
    </nav>
  );
}

export default Navbar