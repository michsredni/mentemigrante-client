import React from 'react'
import { Link } from 'react-router-dom'

function PsicoCard(props) {
  const {imagen, nacionalidad, nombreCompleto, residencia, _id} = props.eachPsico

  return (
    <div className='usuario-card'> 
      <h2>{nombreCompleto}</h2> 
      <h3>{nacionalidad}</h3> 
      <h3>{residencia}</h3>
      <img src={imagen} alt="foto" />
      <Link to={`/usuarios/${_id}`}><button>Ver detalles</button></Link>
      </div>
  )
}

export default PsicoCard