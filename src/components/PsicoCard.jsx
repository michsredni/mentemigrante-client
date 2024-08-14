import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Button, ListGroup} from 'react-bootstrap';

function PsicoCard(props) {
  const {imagen, nacionalidad, nombreCompleto, residencia, _id} = props.eachPsico

  return (
    <Card border="dark" className="psico-card" style={{ width: "60%" }}>
      <Card.Img variant="top" src={imagen} alt="foto" />
          <Card.Body>
            <Card.Title>{nombreCompleto}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <b>Nacionalidad: </b>
                {nacionalidad}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Residencia: </b>
                {residencia}
              </ListGroup.Item>
            </ListGroup>
            <Link to={`/psicologos/${_id}`}><Button variant="dark">Ver detalles</Button></Link>
          </Card.Body>
    </Card>
  )
}

export default PsicoCard