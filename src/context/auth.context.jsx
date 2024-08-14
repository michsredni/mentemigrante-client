import { createContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import service from "../service/service.config";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [estaLoggeado, setEstaLoggeado] = useState(false);
  const [idUsuarioLoggeado, setIdUsuarioLoggeado] = useState(null);
  const [estaConfirmandoInfo, setEstaConfirmandoInfo] = useState(true);

  // Estados de roles de usuarios
  const [isPsico, setIsPsico] = useState(false)
  const [isUsuario, setIsUsuario] = useState(false)

  const usuarioAutenticado = async () => {
    //funcion que llama a la ruta verify para verificar el TOKEN y actualizar los estados

    const authToken = localStorage.getItem("authToken");
    // console.log(authToken)
    if (!authToken) {
      setEstaLoggeado(false);
      setIdUsuarioLoggeado(null);
      setEstaConfirmandoInfo(false);
      setIsPsico(false)
      setIsUsuario(false)
      return;
    }

    try {
      const response = await service.get("/auth/verify");
      // console.log(response);
      setEstaLoggeado(true);
      setIdUsuarioLoggeado(response.data._id);
      setEstaConfirmandoInfo(false); // accion de estar autenticando, se ve o no el spinner ! falso porq ya se autentico 
      if(response.data.rol === "psicologo"){
        setIsPsico(true)
        setIsUsuario(false)
      } else if(response.data.rol === "user"){
        setIsUsuario(true)
        setIsPsico(false)
      } 
    } catch (error) {
      console.log(error);
      setEstaLoggeado(false);
      setIdUsuarioLoggeado(null);
      setEstaConfirmandoInfo(false);
      setIsPsico(false)
      setIsUsuario(false)
    }
  };

  

  const passedContext = {
    estaLoggeado,
    idUsuarioLoggeado,
    usuarioAutenticado,
    isPsico,
    isUsuario,
  };

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  if (estaConfirmandoInfo) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export {
    AuthContext,
    AuthWrapper
  }