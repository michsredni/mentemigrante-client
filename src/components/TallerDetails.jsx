import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '../service/service.config';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../context/auth.context';

function TallerDetails(props) {
  const {creador, descripcion, duracion, imagen, nombre, usuarios, _id} = props.eachTaller

  
  const[oneTaller, setOneTaller] = useState(null)
  const { idUsuarioLoggeado, isUsuario } = useContext(AuthContext);

  useEffect(() => {
    getDataTaller()
  }, [])

  const getDataTaller = async () =>{
    try {
      const response = await service.get(`/talleres/${_id}`)
      // console.log(response.data)
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

    try {
      await service.patch(`/talleres/${_id}/asistencia`)
      props.getData()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveRegister = async (e) => {
    e.preventDefault();
    try {
      await service.patch(`/talleres/${_id}/remover-asistencia`)
      props.getData()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTaller = async () => {
    try {
      await service.delete(`/talleres/${_id}`)
      props.getData()
    } catch (error) {
      console.log(error)
    }
  }

  console.log(idUsuarioLoggeado)
  console.log(usuarios)

  const filteredUser = usuarios.find((eachUsuario) => {
    return eachUsuario._id == idUsuarioLoggeado
  })
  console.log(filteredUser)

  return (
    <div>
      <h2>Taller</h2>
      <img src={imagen} alt="imagen-taller" style={{maxWidth: "40vw"}}/>
      <h5>{nombre}</h5>
      <p>Psicólogo: {creador.nombreCompleto}</p>
      <p>Asistencia: 
        {usuarios.map((eachUsuario)=> {
        return <li key={eachUsuario._id}>{(eachUsuario.nombreCompleto)} </li>
      })}</p>
      <p>{descripcion}</p>
      <p>{duracion}</p>
      {/* boton SOLO para usuarios (NO PSICOLOGOS) */}
      {filteredUser ? <Link><button onClick={handleRemoveRegister}>Remover registro</button></Link> : <Link><button onClick={handleRegister}>Registrarse</button></Link>}
      {/* boton SOLO para creador de este taller */}
      {creador._id == idUsuarioLoggeado ? (<> <Link to={`/talleres/${_id}/editar`}><button>Editar</button></Link> <Link><button onClick={deleteTaller}>Borrar</button></Link> </>) : null}
    </div>
  )
}

export default TallerDetails