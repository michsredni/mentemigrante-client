import React, { useState } from "react";
import { Card } from "react-bootstrap";

function TableroCard(props) {
  const { titulo, descripcion, imagen } = props.eachTablero;

  return (
    <div>
      <Card border="primary" style={{ width: "100%" }}>
        <div className="profileDiv">
          <Card.Img variant="top" src={imagen} />
          <div>
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="#">Editar</Card.Link>
              <Card.Link href="#">Eliminar</Card.Link>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TableroCard;
