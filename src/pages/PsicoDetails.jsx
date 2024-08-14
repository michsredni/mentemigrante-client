import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../service/service.config'
import { Spinner, Card, ListGroup} from 'react-bootstrap';

function PsicoDetails() {

  const params = useParams()
  const [onePsico, setOnePsico] = useState(null)

  useEffect(() => {
    getDataPsico()
  }, [])

  const getDataPsico = async () => {
    try {
      const response = await service.get(`/usuarios/${params.psicoId}/id`)
      console.log(response.data)
      setOnePsico(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (onePsico === null) {
    return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Buscando información del psicólogo...</span>
    </Spinner>)
  }

  const {imagen, nombreCompleto, nacionalidad, residencia, tiempoNuevoPais, _id, especializacion} = onePsico

  return (
    <div className='psico-details'>
      <h1>Información sobre {nombreCompleto}</h1>
      <Card className="user-details-card" style={{ width: "60%" }}>
      <Card.Img variant="top" src={imagen} alt="foto" />
          <Card.Body>
            <ListGroup className="list-group-flush">
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
    </div>
  )
}

export default PsicoDetails