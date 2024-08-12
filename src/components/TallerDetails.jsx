import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import service from '../service/service.config';
import { Spinner } from 'react-bootstrap';

function TallerDetails(props) {
  const {creador, descripcion, duracion, imagen, nombre, usuarios, _id} = props.eachTaller

  
  const[oneTaller, setOneTaller] = useState(null)

  useEffect(() => {
    getDataTaller()
  }, [])

  const getDataTaller = async () =>{
    try {
      const response = await service.get(`/talleres/${_id}`)
      console.log(response.data)
      setOneTaller(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (oneTaller === null) {
    return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Buscando información del taller...</span>
    </Spinner>)
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    // TO DO revisar porque aparece el ususario registrado pero se necesita refrescar la página

    try {
      const response = await service.patch(`/talleres/${_id}/asistencia`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h2>Taller</h2>
      <img src={imagen} alt="imagen-taller" />
      <h5>{nombre}</h5>
      <p>{creador.nombreCompleto}</p>
      <p>{usuarios.nombreCompleto}</p>
      <p>{descripcion}</p>
      <p>{duracion}</p>
      <Link><button onClick={handleRegister}>Registrarse</button></Link>
    </div>
  )
}

export default TallerDetails