import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import service from '../service/service.config';
import { useParams } from 'react-router-dom';

function UserDetails() {

  const params = useParams()
  const [oneUser, setOneUser] = useState(null);
  
  useEffect(() => {
    getDataUsuario()
  }, [])

  const getDataUsuario = async () => {
    try {
      const response = await service.get(`/usuarios/${params.usuarioId}/id`)
        console.log(response.data)
        setOneUser(response.data)
      } catch (error) {
      console.log(error)
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
    </div>

    // TO DO Falta agregar los tableros de cada usuario
  )
}

export default UserDetails