import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Navigate } from 'react-router-dom'

function User(props) {
  const {isUsuario} = useContext(AuthContext)
  if(isUsuario){
    return props.children
  } else {
    return <Navigate to="/"/>
  }
}

export default User