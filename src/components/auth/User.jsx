import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Navigate } from 'react-router-dom'

function User(props) {
  const {isUser} = useContext(AuthContext)
  if(isUser){
    return props.children
  } else {
    return <Navigate to="/"/>
  }
}

export default User