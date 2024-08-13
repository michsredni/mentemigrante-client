import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Navigate } from 'react-router-dom'

function Psicologo(props) {
  const {isPsico} = useContext(AuthContext)
  if(isPsico){
    return props.children
  } else {
    return <Navigate to="/"/>
  }
}

export default Psicologo