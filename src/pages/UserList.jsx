import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import service from "../service/service.config";
import { Spinner } from "react-bootstrap";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/usuarios/user/rol");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (users === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading users data...</span>
      </Spinner>
    );
  }

  return (
    <div className="tallerList-container">
      <h1 style={{ marginBottom: "3vh", color: "#B43F3F", marginTop: "4vh" }}>
        Usuarios
      </h1>
      <div className="usuarios-div">
        {users.map((eachUser) => {
          return <UserCard key={eachUser._id} eachUser={eachUser} />;
        })}
      </div>
    </div>
  );
}

export default UserList;
