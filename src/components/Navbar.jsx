import { useContext, React} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/MentEmigrante-logo.png"

function MyNavbar() {
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
            
      {/* //TODO verificar que las rutas de navbar aparezca dependiendo el usuario (psico no puede hacer tablero) */}

      <Navbar expand="lg" sticky="top" id="navbar">
      <Container>
        <Navbar.Brand  as={Link} to="/"><img src= {logo} alt="logo" width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!estaLoggeado && <Nav.Link href="/registro">Registro</Nav.Link>}
            {!estaLoggeado && <Nav.Link href="/iniciar-sesion">Iniciar Sesion</Nav.Link>}
            {!estaLoggeado && <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>}
            {estaLoggeado && <Nav.Link href="/perfil">Perfil</Nav.Link>}
            {estaLoggeado && <Nav.Link href="/usuarios">Usuarios</Nav.Link>}
            {estaLoggeado && <Nav.Link href="/psicologos">Psicologos</Nav.Link>}
            {estaLoggeado && <Nav.Link href="/talleres">Talleres</Nav.Link>} 
            {estaLoggeado && <Nav.Link href="/tablero-creativo/crear">Crear tablero</Nav.Link>}
            {estaLoggeado && <button onClick={handleLogout}><span>Cerrar sesión</span></button> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      {/* {isAdmin && <Link to="/admin">Solo Admin</Link>} */}
    </nav>
  );
}

export default MyNavbar