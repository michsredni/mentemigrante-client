import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import service from "../service/service.config";
import { AuthContext } from "../context/auth.context";

function TableroCard(props) {
  const { titulo, descripcion, imagen, _id, creador} = props.eachTablero;
  const { idUsuarioLoggeado } = useContext(AuthContext);

  const deleteTablero = async () => {
    console.log("tratando de borrar")
    try {
      await service.delete(`/tableros/${_id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="tablero-card">
      <Card style={{ width: "100%" }}>
        <div className="profileDiv">
          <Card.Img variant="top" src={imagen} style={{ width: '80%'}}/>
          <div>
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
            </Card.Body>

            {/* solo aparezca los botones si soy el creador del tablero*/}
            {creador == idUsuarioLoggeado ? (<Card.Body>
              <Card.Link as={Link} to={`/tablero-creativo/${_id}/editar`}><Button variant="dark" type="submit" className="mb-5" >Editar</Button></Card.Link>
              <Card.Link href="#"><Button variant="dark" type="submit" className="mb-5" onClick={deleteTablero}>Eliminar</Button></Card.Link>
            </Card.Body>) : null}
            
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TableroCard;
