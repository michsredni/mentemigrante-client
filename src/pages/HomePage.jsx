import React from "react";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="hero-section">
        {/* <img src={fondo} width="100%" alt="migration-image" /> */}
        <div className="hero-text">
        <h1>MenteMigrante</h1>
           <h2>Tu espacio seguro en cualquier lugar</h2>
        <h6>
          App de salud mental para personas migras de Latinoamérica que buscan
          recibir un apoyo. Hay talleres todos los días: regístrate para unirte
          a la diversión.
        </h6>
        <br />
        <Link to={"/registro"}>
          <Button variant="dark" type="submit" className="mb-5">
            Unirse a MenteMigrante
          </Button>
        </Link>
        </div>
      </div>
      <div className="cards-home">
        <h3>Cómo funciona MenteMigrante</h3>
        <br />
        <div className="cards-home-content">
          <Card style={{ width: "100%", backgroundColor: '#343a40', color: '#fff' }}>
            <Card.Body>
              <Card.Title> <b>Entre migras nos sostenemos</b></Card.Title>
              <Card.Text>
                Aquí encontrarás un espacio seguro para expresar tu malestar y
                recibir apoyo desde una perspectiva decolonial y antirracista.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", backgroundColor: '#343a40', color: '#fff' }}>
            <Card.Body>
              <Card.Title>¿Qué Ofrecemos?</Card.Title>
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
