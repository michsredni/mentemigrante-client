import { createContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import service from "../service/service.config";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [estaLoggeado, setEstaLoggeado] = useState(false);
  const [idUsuarioLoggeado, setIdUsuarioLoggeado] = useState(null);
  const [estaConfirmandoInfo, setEstaConfirmandoInfo] = useState(true);

  const usuarioAutenticado = async () => {
    //funcion que llama a la ruta verify para verificar el TOKEN y actualizar los estados

    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      setEstaLoggeado(false);
      setIdUsuarioLoggeado(null);
      setEstaConfirmandoInfo(false);

      return;
    }

    try {
      const response = await service.get("/auth/verify");
      // console.log(response);
      setEstaLoggeado(true);
      setIdUsuarioLoggeado(response.data._id);
      setEstaConfirmandoInfo(false); // accion de estar autenticando, se ve o no el spinner ! falso porq ya se autentico 
    } catch (error) {
      console.log(error);
      setEstaLoggeado(false);
      setIdUsuarioLoggeado(null);
      setEstaConfirmandoInfo(false);
    }
  };

  const passedContext = {
    estaLoggeado,
    idUsuarioLoggeado,
    usuarioAutenticado,
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