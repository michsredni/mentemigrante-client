import React, { useEffect, useState } from "react";
import { Spinner, Card, ListGroup } from "react-bootstrap";
import service from "../service/service.config";
import { useParams } from "react-router-dom";
import TableroCard from "../components/TableroCard";

function UserDetails() {
  const params = useParams();
  const [oneUser, setOneUser] = useState(null);
  const [userTableros, setUserTableros] = useState([]);

  useEffect(() => {
    getDataUsuario();
  }, []);

  useEffect(() => {
    if (oneUser) {
      getTablerosData();
    }
  }, [oneUser]);

  const getDataUsuario = async () => {
    try {
      const response = await service.get(`/usuarios/${params.usuarioId}/id`);
      // console.log(response.data)
      setOneUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTablerosData = async () => {
    try {
      const responseTableros = await service.get(
        `/tableros/${oneUser._id}/por-usuario`
      );
      // console.log("Data Tableros: ",responseTableros.data);
      setUserTableros(responseTableros.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (oneUser === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          Buscando información del usuario...
        </span>
      </Spinner>
    );
  }

  const { imagen, nombreCompleto, nacionalidad, residencia, tiempoNuevoPais } =
    oneUser;

  return (
    <div className="tallerList-container">
      <h1 className="user-info-title">Información sobre {nombreCompleto}</h1>
      <Card className="psico-card-box mt-5" style={{ width: "30%" }}>
          <Card.Img
            className="psico-card-image"
            variant="top"
            src={imagen}
            alt="foto"
          />
          <Card.Body>
            <ListGroup className="user-info">
              <ListGroup.Item>
                <b>Nacionalidad: </b>
                {nacionalidad}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Residencia: </b>
                {residencia}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Tiempo en el nuevo país: </b>
                {tiempoNuevoPais}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
      </Card>
      <div className="tallerList-container" style={{ margin: "2vh"}}>
        <h3 style={{ marginBottom: "3vh", color: "#B43F3F"}}>
          Tableros de {nombreCompleto}
        </h3>
        <div className="talleres-div" >
          {userTableros.map((eachTablero) => {
            return (
              <TableroCard key={eachTablero._id} eachTablero={eachTablero} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
