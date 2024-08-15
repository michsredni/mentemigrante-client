import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import errorImg from "../assets/errorIMG.png"


function NotFoundPage() {
  return (
    <div>
      <img src={errorImg} alt="error 404" style={{width: "300px", marginBottom: "50px"}}/>
      
      <p>Actualizamos nuestro sitio web regularmente, por lo que es posible que esta página haya sido eliminada o que la URL no sea del todo correcta.</p>
      <br />
      <p>Explora lo más reciente de MenteMigrante por aquí...</p>

      <Link to="/" >
        <Button variant='dark'>Volver al inicio</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage