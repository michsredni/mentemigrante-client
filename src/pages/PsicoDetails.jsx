import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../service/service.config";
import { Spinner, Card, ListGroup } from "react-bootstrap";

function PsicoDetails() {
  const params = useParams();
  const [onePsico, setOnePsico] = useState(null);
  const [psicoTalleres, setPsicoTalleres] = useState([]);

  useEffect(() => {
    getDataPsico();
  }, []);

  useEffect(() => {
    if (onePsico) {
      getTalleresData();
    }
  }, [onePsico]);

  const getDataPsico = async () => {
    try {
      const response = await service.get(`/usuarios/${params.psicoId}/id`);
      setOnePsico(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTalleresData = async () => {
    try {
      const responseTalleres = await service.get(
        `/talleres/${params.psicoId}/id`
      );
      setPsicoTalleres(responseTalleres.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (onePsico === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          Buscando información del psicólogo...
        </span>
      </Spinner>
    );
  }

  const {
    imagen,
    nombreCompleto,
    nacionalidad,
    residencia,
    tiempoNuevoPais,
    especializacion,
  } = onePsico;

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
              <b>Especialización: </b>
              {especializacion}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Tiempo en el nuevo país: </b>
              {tiempoNuevoPais}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <div className="tallerList-container" style={{ margin: "2vh" }}>
        <h3 style={{ marginBottom: "3vh", color: "#B43F3F" }}>
          Talleres de {nombreCompleto}
        </h3>
        <div className="talleres-div">
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
      </div>
    </div>
  );
}

export default PsicoDetails;
