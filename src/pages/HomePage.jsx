import React from 'react'
import heroImage from "../assets/hero-image.png"
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div className='hero-section'>
        <img src={heroImage} width="35%" alt="hero-image" />
        <div className='hero-section-content'>
          <h1>MenteMigrante: Tu espacio seguro en cualquier lugar</h1>
          <h5>App de salud mental para personas migras de Latinoamérica que buscan recibir un apoyo. Hay talleres todos los días: regístrate para unirte a la diversión.</h5>
          <br />
          <Link to={"/registro"}><Button variant="dark" type="submit" className="mb-5" >Unirse a MenteMigrante</Button>
          </Link>
        </div>
        
      </div>
      <div className='cards-home'>
        <h3>Cómo funciona MenteMigrante</h3>
      <div className='cards-home-content'>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Entre migras nos sostenemos</Card.Title>
            <Card.Text>
              Aquí encontrarás un espacio seguro para expresar tu malestar y recibir apoyo desde una perspectiva decolonial y antirracista.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
        <Card.Body>
            <Card.Title>Entre migras nos sostenemos</Card.Title>
            <Card.Text>
              Te ayudamos a cuestionar y desafiar las estructuras de poder que afectan tu vida, para que puedas cuidar tu bienestar mientras construyes un nuevo futuro.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </div>
      
        
    </div>
  )
}

export default HomePage