import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import service from "../service/service.config";

function TableroCard(props) {
  const navigate = useNavigate()
  const { titulo, descripcion, imagen, _id } = props.eachTablero;

  const deleteTablero = async () =>{
    console.log("tratando de borrar")
    try {
      await service.delete(`/tableros/${_id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  // En la linea del card link de editar hacia falta poner as={Link} para que lo reconociese como un link y no usar el href. 
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
              <Card.Link as={Link} to={`/tablero-creativo/${_id}/editar`}>
                Editar
              </Card.Link>
              <Card.Link href="#"><Button onClick={deleteTablero}>Eliminar</Button></Card.Link>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TableroCard;
