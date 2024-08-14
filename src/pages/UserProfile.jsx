import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup, Spinner} from "react-bootstrap";
import { Link } from 'react-router-dom'
import service from "../service/service.config";
import TableroCard from "../components/TableroCard";
import { AuthContext } from "../context/auth.context";

function UserProfile() {
  const [ownProfile, setOwnProfile] = useState(null);
  const [ownTableros, setOwnTableros] = useState([]);

  const {isUsuario} = useContext(AuthContext)

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (ownProfile) {
      getTablerosData();
    }
  }, [ownProfile]);

  const getData = async () => {
    try {
      const response = await service.get("/usuarios/propio");
      // console.log(response.data);
      setOwnProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTablerosData = async () => {
    try {
      const responseTableros = await service.get(
        `/tableros/${ownProfile._id}/por-usuario`
      );
      // console.log("Data Tableros: ",responseTableros.data);
      setOwnTableros(responseTableros.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (ownProfile === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading profile data...</span>
      </Spinner>
    );
  }

  // Método de formateo de fechas
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="user-profile">
      <Card className="profile-card" border="dark" style={{ width: "30%" }}>
        <div className="profileDiv">
          <Card.Img variant="top" src={ownProfile.imagen} />
          <div>
            <Card.Body>
              <Card.Title>{ownProfile.nombreCompleto}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <b>Correo Electrónico: </b>
                {ownProfile.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Nacionalidad: </b>
                {ownProfile.nacionalidad}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Ciudad de residencia: </b>
                {ownProfile.residencia}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Tiempo en el país: </b>
                {ownProfile.tiempoNuevoPais}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Fecha de alta: </b>
                {formatDate(ownProfile.createdAt)}
              </ListGroup.Item>
            </ListGroup>
          <Link to={`/perfil/editar`}><Button variant="dark" type="submit" className="mt-2 mb-5">Editar mi perfil</Button></Link>
          </div>
        </div>
      </Card>
      <br />
      {isUsuario && <Card className="tablero-card" style={{ width: "30%"}}>
        <Card.Body>
          <Card.Title className="tableros-titulo">Mis Tableros</Card.Title>
          {ownTableros.map((eachTablero) => {
            return (
              <TableroCard key={eachTablero._id} eachTablero={eachTablero} />
            );
          })}
        </Card.Body>
      </Card>}
      
    </div>
  );
}

export default UserProfile;
