import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

function UserCard(props) {
  const { imagen, nacionalidad, nombreCompleto, residencia, _id } = props.eachUser;

  return (
    <Card className="user-card-box">
      <Card.Img className='user-card-image' variant="top" src={imagen} alt="foto" />
      <Card.Body>
        <Card.Title>{nombreCompleto}</Card.Title>
        <Card.Text>
        <span style={{color: "#b43f3f"}}><b>Nacionalidad: </b>{nacionalidad}</span><br />
        <span style={{color: "#b43f3f"}}><b>Residencia: </b>{residencia}</span>
        </Card.Text>
        <Link to={`/usuarios/${_id}`}>
          <Button className='user-card-btns'>Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
