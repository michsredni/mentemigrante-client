import React, { useContext, useEffect, useState } from "react";
import service from "../service/service.config";
import { Button, Spinner } from "react-bootstrap";
import TallerDetails from "../components/TallerDetails";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function TallerList() {
  const [talleres, setTalleres] = useState([]);
  const { isPsico } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/talleres");
      console.log(response.data);
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
    <div className="tallerList-container">
      <h1 style={{ marginBottom: "3vh", color: "#B43F3F", marginTop: "4vh" }}>
        Talleres
      </h1>
      {isPsico && (
        <Link to={"/talleres/crear"}>
          <Button type="submit" className="mb-5 crear-taller-button">
            Crea tu Taller
          </Button>
        </Link>
      )}
      <div className="talleres-div">
        {talleres.map((eachTaller) => {
          return (
            <TallerDetails
              key={eachTaller._id}
              setTalleres={setTalleres}
              eachTaller={eachTaller}
              getData={getData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TallerList;
