import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../service/service.config'
import { Spinner, Card, ListGroup} from 'react-bootstrap';

function PsicoDetails() {

  const params = useParams()
  const [onePsico, setOnePsico] = useState(null)
  const [psicoTalleres, setPsicoTalleres] = useState([])

  useEffect(() => {
    getDataPsico()
  }, [])

  useEffect(() => {
    if (onePsico) {
      getTalleresData();
    }
  }, [onePsico]);

  const getDataPsico = async () => {
    try {
      const response = await service.get(`/usuarios/${params.psicoId}/id`)
      setOnePsico(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getTalleresData = async () => {
    try {
      const responseTalleres = await service.get(`/talleres/${params.psicoId}/id`)
      setPsicoTalleres(responseTalleres.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (onePsico === null) {
    return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Buscando información del psicólogo...</span>
    </Spinner>)
  }

  const {imagen, nombreCompleto, nacionalidad, residencia, tiempoNuevoPais, especializacion} = onePsico

  return (
    <div className='psico-details'>
      <h1>Información sobre {nombreCompleto}</h1>
      <div className='psico-details-content'>
      <Card className="psico-details-card">
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
    {/* TO DO por si no aparecen talleres*/}
    {}
    {/* {project.tasks.length === 0 ? <h4>No se han creado talleres</h4> : null} */}
    <div className="psico-details-talleres">
      <h3>Talleres de {nombreCompleto}</h3>
      {psicoTalleres.map((eachTaller) => {
          return(
            <div key={eachTaller._id}>
              <Card className="taller-details-card" style={{ width: "60%" }}>
              <Card.Img variant="top" src={imagen} alt="imagen-taller" style={{maxWidth: "40vw"}}/>
              <Card.Body>
                <ListGroup className="list-group-flush">
                <h5><b>Nombre de taller:</b>{eachTaller.nombre}</h5>
                <p><b>Descripción: </b>{eachTaller.descripcion}</p>
                </ListGroup>
              </Card.Body>
              </Card>
            </div>)})}
    </div>
    </div>
    </div>
  )
}

export default PsicoDetails