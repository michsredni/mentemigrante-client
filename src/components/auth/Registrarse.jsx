import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

function Registrarse() {
    const {isRegister} = useContext(AuthContext)
    if(isRegister){
      return props.children
    } else {
      return <Navigate to="/talleres"/>
    }
}

export default Registrarse