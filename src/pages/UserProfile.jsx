import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import service from "../service/service.config";
import TableroCard from "../components/TableroCard";
import { AuthContext } from "../context/auth.context";

function UserProfile() {
  const [ownProfile, setOwnProfile] = useState(null);
  const [ownTableros, setOwnTableros] = useState([]);
  const [psicoTalleres, setPsicoTalleres] = useState([]);

  const { isUsuario } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (ownProfile) {
      getTablerosData();
    }
  }, [ownProfile]);

  useEffect(() => {
    if (ownProfile) {
      getTalleresData();
    }
  }, [ownProfile]);

  const getData = async () => {
    try {
      const response = await service.get("/usuarios/propio");
      console.log(response.data);
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
      console.log("Data Tableros: ", responseTableros.data);
      setOwnTableros(responseTableros.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTalleresData = async () => {
    try {
      const responseTalleres = await service.get(
        `/talleres/${ownProfile._id}/id`
      );
      setPsicoTalleres(responseTalleres.data);
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
    <div className="tallerList-container">
      <Card className="psico-card-box mt-5" style={{ width: "30%" }}>
        <Card.Img
          className="psico-card-image"
          variant="top"
          src={ownProfile.imagen}
        />
        <div>
          <Card.Body>
            <Card.Title>{ownProfile.nombreCompleto}</Card.Title>
          </Card.Body>
          <ListGroup className="user-info">
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
            {!isUsuario && (
              <ListGroup.Item>
                <b>Especialización: </b>
                {ownProfile.especializacion}
              </ListGroup.Item>
            )}
          </ListGroup>
          <Link to={`/perfil/editar`}>
            <Button type="submit" className="mt-2 mb-5 psico-card-btns">
              Editar mi perfil
            </Button>
          </Link>
        </div>
      </Card>
      <div className="tallerList-container" style={{ margin: "2vh" }}>
        {isUsuario ? (
          <div className="talleres-div">
            <h3 style={{ marginBottom: "3vh", color: "#B43F3F" }}>
              Mis Tableros
            </h3>
            {ownTableros.map((eachTablero) => {
              return (
                <TableroCard key={eachTablero._id} eachTablero={eachTablero} />
              );
            })}
          </div>
        ) : (
          <div className="talleres-div">
            <h3 style={{ marginBottom: "3vh", color: "#B43F3F" }}>
              Mis Talleres
            </h3>
            {psicoTalleres.map((eachTaller) => {
              return (
                <div key={eachTaller._id}>
                  <Card className="psico-card-box" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={eachTaller.imagen}
                      alt="imagen-taller"
                      style={{ width: "80%", borderRadius: "5px" }}
                    />
                    <div className="taller-psico-details">
                      <Card.Body>
                        <ListGroup className="list-group-flush">
                          <h5>
                            <b>Nombre de taller:</b>
                            {eachTaller.nombre}
                          </h5>
                          <p>
                            <b>Descripción: </b>
                            {eachTaller.descripcion}
                          </p>
                        </ListGroup>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
