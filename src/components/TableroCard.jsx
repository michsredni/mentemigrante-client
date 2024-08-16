import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import service from "../service/service.config";
import { AuthContext } from "../context/auth.context";

function TableroCard(props) {
  const { titulo, descripcion, imagen, _id, creador } = props.eachTablero;
  const { idUsuarioLoggeado } = useContext(AuthContext);

  const deleteTablero = async () => {
    console.log("tratando de borrar");
    try {
      await service.delete(`/tableros/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card className="psico-card-box" style={{ width: "100%" }}>
        <Card.Img src={imagen} style={{ width: "80%", borderRadius: "5px" }} />
        <div>
          <Card.Body>
            <Card.Title>{titulo} </Card.Title>
            <Card.Text>{descripcion}</Card.Text>
          </Card.Body>
          {/* solo aparezca los botones si soy el creador del tablero*/}
          {creador == idUsuarioLoggeado ? (
            <div className="tableroCardBtns">
              <Link to={`/tablero-creativo/${_id}/editar`}>
                <Button type="submit" className="mb-5 psico-card-btns">
                  Editar
                </Button>
              </Link>
              <Link to="#">
                <Button
                  type="submit"
                  className="mb-5 psico-card-btns"
                  onClick={deleteTablero}
                >
                  Eliminar
                </Button>
              </Link>
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}

export default TableroCard;
