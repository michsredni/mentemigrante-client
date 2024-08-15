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
      <h1 style={{ marginBottom: "10%", color: "#173B45", marginTop: '20%'}}>Talleres</h1>
      <br />
      {isPsico &&
        <Link to={"/talleres/crear"}>
      <Button variant="dark" type="submit" className="mb-5">
        Crea tu Taller
      </Button></Link>} 
      
      
      {talleres.map((eachTaller) => {
        return <TallerDetails key={eachTaller._id} setTalleres={setTalleres} eachTaller={eachTaller} getData={getData}/>;
      })}
    </div>
  );
}

export default TallerList;
