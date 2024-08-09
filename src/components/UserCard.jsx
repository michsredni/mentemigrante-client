import React from 'react'

function UserCard(props) {
const{imagen, nacionalidad, nombreCompleto, residencia} = props.eachUser

  return (
    <div className='usuario-card'> 
      <h2>{nombreCompleto}</h2> 
      <h3>{nacionalidad}</h3> 
      <h3>{residencia}</h3>
      <img src={imagen} alt="foto" />
      
      </div>
    
  )
}

export default UserCard