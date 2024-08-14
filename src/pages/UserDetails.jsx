import React, { useEffect, useState } from 'react'
import { Spinner, Card, ListGroup} from 'react-bootstrap';
import service from '../service/service.config';
import { useParams } from 'react-router-dom';
import TableroCard from '../components/TableroCard';

function UserDetails() {

  const params = useParams()
  const [oneUser, setOneUser] = useState(null);
  const [userTableros, setUserTableros] = useState([]);
  
  useEffect(() => {
    getDataUsuario()
  }, [])

  useEffect(() => {
    if (oneUser) {
      getTablerosData();
    }
  }, [oneUser]);

  const getDataUsuario = async () => {
    try {
      const response = await service.get(`/usuarios/${params.usuarioId}/id`)
        console.log(response.data)
        setOneUser(response.data)
      } catch (error) {
      console.log(error)
    }
  }
  
  const getTablerosData = async () => {
    try {
      const responseTableros = await service.get(
        `/tableros/${oneUser._id}/por-usuario`
      );
      console.log("Data Tableros: ",responseTableros.data);
      setUserTableros(responseTableros.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (oneUser === null) {
    return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Buscando información del usuario...</span>
    </Spinner>)
  }

  const {imagen, nombreCompleto, nacionalidad, residencia, tiempoNuevoPais} = oneUser


  return (
    <div className='user-details'>
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
                <b>Tiempo en el nuevo país: </b>
                {tiempoNuevoPais}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
    </Card>
      <Card border="dark" style={{ width: "80%" }}>
        <Card.Body>
          <Card.Title>Tableros de {nombreCompleto}</Card.Title>
          {userTableros.map((eachTablero) => {
            return (
              <TableroCard key={eachTablero._id} eachTablero={eachTablero} />
            );
          })}
        </Card.Body>
      </Card>
    </div>

   
  )
}

export default UserDetails