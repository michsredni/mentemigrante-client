import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

  const {usuarioAutenticado} = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlecontraseñaChange = (e) => setContraseña(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const credencialesUsuario ={
      email,
      contraseña
    }

try {

await service.post("/auth/iniciar-sesion")


  
} catch (error) {
  
}





  }


  return (
    <div>LoginPage</div>
  )
}

export default LoginPage