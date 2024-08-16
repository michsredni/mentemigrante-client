import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Button, ListGroup} from 'react-bootstrap';

function PsicoCard(props) {
  const {imagen, nacionalidad, nombreCompleto, residencia, _id, especializacion} = props.eachPsico

  return (
    <Card className="psico-card-box" style={{ width: "100%" }}>
      <Card.Img className='psico-card-image' variant="top" src={imagen} alt="foto" />
          <Card.Body>
            <Card.Title >{nombreCompleto}</Card.Title>
            <Card.Text className="list-group-flush">
              <Card.Text>
                <b>Residencia: </b>
                {residencia}
              </Card.Text>
              <Card.Text>
                <b>Nacionalidad: </b>
                {nacionalidad}
              </Card.Text>
              <Card.Text>
                <b>Especializacion: </b>
                {especializacion}
              </Card.Text>
            </Card.Text>
            <Link to={`/psicologos/${_id}`}><Button className='psico-card-btns' variant="dark">Ver detalles</Button></Link>
          </Card.Body>
    </Card>
  )
}

export default PsicoCard