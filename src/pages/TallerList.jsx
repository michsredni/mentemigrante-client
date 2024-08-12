import React, { useEffect, useState } from "react";
import service from "../service/service.config";
import { Button, Spinner } from "react-bootstrap";
import TallerDetails from "../components/TallerDetails";
import { Link } from "react-router-dom";

function TallerList() {
  const [talleres, setTalleres] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/talleres");
      // console.log(response.data);
      setTalleres(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (talleres === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading users data...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <h2>Talleres</h2>
      <p>
        Nuestros talleres están diseñados para apoyar la salud mental de las
        personas migrantes, reconociendo los desafíos únicos que enfrentan
        durante su proceso migratorio. A través de un enfoque integrador,
        buscamos ofrecer herramientas que no solo proporcionen alivio emocional,
        sino que también promuevan una mayor comprensión de las dinámicas
        sociales que afectan su bienestar.
      </p>

      <Link to={"/talleres/crear"}>
      <Button variant="dark" type="submit" className="mb-5">
        Crea tu Taller
      </Button>
      </Link>
      
      {talleres.map((eachTaller) => {
        return <TallerDetails key={eachTaller._id} eachTaller={eachTaller} />;
      })}
    </div>
  );
}

export default TallerList;
