import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

function UserCard(props) {
  const { imagen, nacionalidad, nombreCompleto, residencia, _id } = props.eachUser;

  return (
    <Card className="user-card" style={{ width: "60%" }}>
      <Card.Img variant="top" src={imagen} alt="foto" />
      <Card.Body>
        <Card.Title>{nombreCompleto}</Card.Title>
        <Card.Text>
        <span><b>Nacionalidad: </b>{nacionalidad}</span><br />
        <span><b>Residencia: </b>{residencia}</span>
        </Card.Text>
        <Link to={`/usuarios/${_id}`}>
          <Button variant="dark">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
