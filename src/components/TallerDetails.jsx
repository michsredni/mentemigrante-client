import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '../service/service.config';
import { AuthContext } from '../context/auth.context';
import { Spinner, Card, ListGroup} from 'react-bootstrap';

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

  const estaRegistradoTaller = usuarios.some((eachUsuario) => { //da un true/flase
    return eachUsuario._id == idUsuarioLoggeado
  })

  return (
    <div>
      <Card className="taller-details-card" style={{ width: "60%" }}>
      <Card.Img variant="top" src={imagen} alt="imagen-taller" style={{maxHeight: "40vw"}}/>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><h5><b>Nombre de taller: </b>{nombre}</h5></ListGroup.Item>
          <ListGroup.Item><p><b>Psicólogo: </b>{creador.nombreCompleto}</p></ListGroup.Item>
          <ListGroup.Item><p><b>Miembros: </b> 
        {usuarios.map((eachUsuario)=> {
        return <li key={eachUsuario._id}>{(eachUsuario.nombreCompleto)} </li>})}</p></ListGroup.Item>
        <ListGroup.Item><p><b>Descripción: </b>{descripcion}</p></ListGroup.Item>
        <ListGroup.Item><b>Duración: </b><p>{duracion}</p></ListGroup.Item>
        </ListGroup>
      </Card.Body>
      {/* boton SOLO para usuarios (NO PSICOLOGOS) */}
      {isUsuario && estaRegistradoTaller && <Link><button onClick={handleRemoveRegister}>Remover registro</button></Link>}
      {isUsuario && !estaRegistradoTaller && <Link><button onClick={handleRegister}>Registrarse</button></Link>}
      {/* boton SOLO para creador de este taller */}
      {creador._id == idUsuarioLoggeado ? (<> <Link to={`/talleres/${_id}/editar`}><button>Editar</button></Link> <Link><button onClick={deleteTaller}>Borrar</button></Link> </>) : null}
      </Card>
    </div>
  )
}

export default TallerDetails