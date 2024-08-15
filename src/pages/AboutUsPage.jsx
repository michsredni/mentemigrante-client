import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

function AboutUsPage() {
  return (
    <div className="about-page">
      <Container>
        <Row className="justify-content-center align-items-center h-100">
            <Card className="about-card">
              <Card.Body>
                <h1 className="text-center">Sobre Nosotros</h1>
                <p>
                  Bienvenido a <strong>MenteMigrante</strong>, tu aliado en el viaje hacia el bienestar mental.
                </p>
                <p>
                  Somos una aplicación dedicada a brindar apoyo emocional y psicológico a personas migrantes de Latinoamérica que buscan adaptarse y prosperar en un nuevo entorno. Entendemos que la migración puede ser un proceso desafiante, y estamos aquí para ofrecerte el apoyo que necesitas para enfrentar esta transición con confianza y resiliencia.
                </p>
                <br />
                <h3>Nuestra Misión</h3>
                <p>
                  En <strong>MenteMigrante</strong>, nuestra misión es proporcionar un espacio seguro y enriquecedor donde puedas encontrar apoyo emocional, compartir tus experiencias y aprender nuevas herramientas para tu bienestar mental. Nos comprometemos a ofrecer recursos accesibles y talleres diarios que te ayuden a gestionar el estrés, la ansiedad y otros desafíos emocionales que puedas enfrentar.
                </p>
                <br />
                <h3>¿Qué Ofrecemos?</h3>
                <ul>
                  <li><strong>Talleres Diarios</strong>: Únete a nuestros talleres interactivos y enriquecedores diseñados para ayudarte a desarrollar habilidades de afrontamiento, establecer conexiones significativas y mantener una salud mental óptima.</li>
                  <li><strong>Comunidad de Apoyo</strong>: Conéctate con otros migrantes que comparten tus experiencias y desafíos. Nuestra comunidad te ofrece un entorno comprensivo y empático para que te sientas acompañado en cada paso del camino.</li>
                  <li><strong>Recursos Especializados</strong>: Accede a una variedad de materiales y herramientas diseñados por profesionales de la salud mental para ayudarte a abordar tus necesidades específicas.</li>
                </ul>
                <br />
                <h3>¿Por Qué Elegirnos?</h3>
                <p>
                  Sabemos que cada experiencia de migración es única, y nos esforzamos por ofrecer un enfoque personalizado que se adapte a tus necesidades. Nuestro equipo de profesionales está comprometido en proporcionar un apoyo que respete tu cultura, tu historia y tus circunstancias individuales.
                </p>
                <p>
                  En <strong>MenteMigrante</strong>, no solo buscamos ofrecer apoyo, sino también celebrar tus logros y ayudarte a construir una vida plena y satisfactoria en tu nuevo hogar.
                </p>
                <br />
                <h3>Únete a Nosotros</h3>
                <p>
                  ¡No estás solo en este viaje! Regístrate hoy y comienza a explorar los talleres y recursos que hemos preparado para ti. Estamos aquí para apoyarte, inspirarte y ayudarte a alcanzar el bienestar que mereces.
                </p>
                <p className="text-center">
                  Gracias por confiar en <strong>MenteMigrante</strong>. Juntos, podemos transformar tu experiencia de migración en una oportunidad para el crecimiento y el empoderamiento personal.
                </p>
              </Card.Body>
            </Card>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUsPage