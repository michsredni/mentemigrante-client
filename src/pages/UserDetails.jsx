import React, { useEffect, useState } from 'react'
import { Spinner, Card } from 'react-bootstrap';
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

    <div>
      <h3>Detalles del Usuario</h3>
      <img src={imagen} alt="foto-perfil" />
      <p>{nombreCompleto}</p>
      <p>{nacionalidad}</p>
      <p>{residencia}</p>
      <p>{tiempoNuevoPais}</p>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Tableros de {oneUser.nombreCompleto}</Card.Title>
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