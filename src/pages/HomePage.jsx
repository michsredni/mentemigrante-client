import React, { useContext } from "react";

import { Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import cardImageOne from "../assets/vector_1.png";
import cardImageTwo  from "../assets/vector_2.png"
import { AuthContext } from "../context/auth.context";
import imageCaruseltaller1 from "../assets/taller1.jpg";
import imageCaruseltaller2 from "../assets/taller2.jpg";
import imageCaruseltaller3 from "../assets/taller4.png";
import imageCarusel1 from "../assets/tablero1.jpeg";
import imageCarusel2 from "../assets/tablero2.jpeg";
import imageCarusel3 from "../assets/tablero3.jpg";


function HomePage() {
  const { estaLoggeado } = useContext(AuthContext);

  return (
    <div>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Tu espacio seguro en cualquier lugar</h1>
          <br />
          <h4>
            App de salud mental para personas migras de Latinoamérica que buscan
            recibir un apoyo. Hay talleres todos los días: regístrate para
            unirte a la diversión.
          </h4>
          {!estaLoggeado && (
            <Link to={"/registro"}>
              <Button className="botonRegistro mb-5" type="submit" size="lg">
                Unirse a Mentemigrante
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="cards-home">
        <h2>Cómo funciona Mentemigrante</h2>
        <br />
        <div className="cards-home-content">
          <Card
            style={{
              backgroundColor: "#901c1c",
              color: "#F8EDED",
              padding: "5% 0",
            }}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                <b>Entre migras nos sostenemos</b>
              </Card.Title>
              <Card.Img src={cardImageOne} style={{ width: "50%" }}></Card.Img>
              <Card.Text>
                Aquí encontrarás un espacio seguro para expresar tu malestar y
                recibir apoyo desde una perspectiva decolonial y antirracista.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#901c1c",
              color: "#F8EDED",
              padding: "5% 0",
            }}
          >
            <Card.Body>
              <Card.Title>¿Qué ofrecemos?</Card.Title>
              <Card.Img src={cardImageTwo} style={{ width: "25%"}}></Card.Img>
              <Card.Text>
                Te ayudamos a cuestionar y desafiar las estructuras de poder que
                afectan tu vida, para que puedas cuidar tu salud mental mientras
                construyes un nuevo futuro.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="carousel-div">
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageCaruseltaller1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Talleres</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageCaruseltaller2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Talleres</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageCaruseltaller3}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Talleres</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageCarusel1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Tablero Creativo</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageCarusel2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Tablero Creativo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageCarusel3}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Tablero Creativo</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
