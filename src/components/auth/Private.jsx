import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Navigate } from 'react-router-dom';


//componente para hacer privada ciertas paginas de la app
function Private(props) {
    
    

    const{estaLoggeado} = useContext(AuthContext);
    
    if(estaLoggeado){
        return props.children
    } else {
        return <Navigate to = "/iniciar-sesion"/>
    }

}

export default Private