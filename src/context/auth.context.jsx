import { createContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [estaLoggeado, setEstaLoggeado] = useState(false);
  const [idUsuarioLoggeado, setIdUsuarioLoggeado] = useState(null);
  const [estaAutenticado, setEstaAutenticado] = useState(true);

  const usuarioAutenticado = async () => {
    //funcion que llama a la ruta verify para verificar el TOKEN y actualizar los estados

    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      setEstaLoggeado(false);
      setIdUsuarioLoggeado(null);
      setEstaAutenticado(false);

      return;
    }

    try {
      const response = await service.get("/auth/verify");
      console.log(response);
      setEstaLoggeado(true);
      setIdUsuarioLoggeado(response.data._id);
      setEstaAutenticado(false); //todo preguntar porq es falso, si el token esta autenticado
    } catch (error) {
      console.log(error);
      setEstaLoggeado(false);
      setIdUsuarioLoggeado(null);
      setEstaAutenticado(false);
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

  if (estaAutenticado) {
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