import React, { useContext } from "react";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/MentEmigrante-logo.png";
import cardImageOne from "../assets/vector_1.png"
import { AuthContext } from "../context/auth.context";

function HomePage() {

  const {estaLoggeado} = useContext(AuthContext)

  return (
    <div>
      <div className="hero-section">
        {/* <img src={fondo} width="100%" alt="migration-image" /> */}
        <div className="hero-text">
          <img className="logo" src={logo} alt="logo" width={"500px"} />
          <h1>Tu espacio seguro en cualquier lugar</h1>
          <h4>
            App de salud mental para personas migras de Latinoamérica que buscan
            recibir un apoyo. Hay talleres todos los días: regístrate para unirte
            a la diversión.
          </h4>
          {!estaLoggeado && <Link to={"/registro"}>
            <Button className="botonRegistro mb-5" type="submit">
              Unirse a Mentemigrante
            </Button>
          </Link>}
          
        </div>
      </div>
      <div className="cards-home">
        <h3>Cómo funciona Mentemigrante</h3>
        <br />
        <div className="cards-home-content">
          <Card style={{backgroundColor: '#173B45', color: '#F8EDED', padding: '5% 0'}}>
            <Card.Body>
              <Card.Title> <b>Entre migras nos sostenemos</b></Card.Title>
              <Card.Img src={cardImageOne} style={{width: "50%"}}></Card.Img>
              <Card.Text>
                Aquí encontrarás un espacio seguro para expresar tu malestar y
                recibir apoyo desde una perspectiva decolonial y antirracista.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#173B45', color: '#F8EDED', padding: '5% 0' }}>
            <Card.Body>
              <Card.Title>¿Qué ofrecemos?</Card.Title>
              <Card.Text>
                Te ayudamos a cuestionar y desafiar las estructuras de poder que
                afectan tu vida, para que puedas cuidar tu salud mental mientras
                construyes un nuevo futuro.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
