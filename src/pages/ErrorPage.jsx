import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ErrorPage() {
  return (
    <div>  
    <h1 > ERROR 500</h1>
    <p>¡Oops! Algo salió mal en nuestro servidor.</p>
    <br />
    <p> Estamos trabajando para solucionarlo. Por favor, vuelve a intentarlo más tarde.</p>

    <Link to="/" >
      <Button variant='dark'>Volver al inicio</Button>
    </Link>
  </div>
  )
}

export default ErrorPage