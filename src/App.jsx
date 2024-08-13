import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import UserProfile from './pages/UserProfile';
import PsicoList from './pages/PsicoList';
import PsicoDetails from './pages/PsicoDetails';
import TallerList from './pages/TallerList';
import TallerDetails from './components/TallerDetails';
import CreateTablero from './pages/CreateTablero';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import EditTablero from './pages/EditTablero';
import CreateTaller from './pages/CreateTaller';
import EditTaller from './pages/EditTaller';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

//componentes
import Navbar from './components/Navbar'
import Private from './components/auth/Private';
import Psicologo from './components/auth/Psicologo';
import User from './components/auth/User'
import EditProfileFormPage from './pages/EditProfileFormPage';



function App() {

  return ( 
    <div>
      <div className='navbar'>
        <div className="navbar-content">
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/registro" element={<SignupPage/>}/>
        <Route path ="/iniciar-sesion" element={<LoginPage/>}/>
        <Route path ="/sobre-nosotros" element={<AboutUsPage/>}/>
        <Route path ="/perfil" element={ <Private> <UserProfile/> </Private>}/>
        <Route path ="/perfil/editar" element={ <Private> <EditProfileFormPage/> </Private>}/>
        <Route path ="/psicologos" element={ <Private> <PsicoList/> </Private>}/>
        <Route path ="/psicologos/:psicoId" element={ <Private> <PsicoDetails/> </Private>}/>
        <Route path ="/talleres" element={<TallerList/>}/>
        <Route path ="/talleres/crear" element={ <Psicologo> <CreateTaller/> </Psicologo> }/>
        <Route path ="/talleres/:tallerId" element={<TallerDetails/>}/>
        <Route path ="/talleres/:tallerId/editar" element={ <Psicologo> <EditTaller/> </Psicologo>  }/>
        <Route path ="/tablero-creativo/crear" element={ <User> <CreateTablero/> </User>}/>
        <Route path ="/tablero-creativo/:tableroId/editar" element={ <User> <EditTablero/> </User>}/>   
        <Route path ="/usuarios" element={<Private> <UserList/> </Private>}/>
        <Route path ="/usuarios/:usuarioId" element={<Private> <UserDetails/> </Private>}/>
        <Route path ="*" element={<NotFoundPage/>}/>
        <Route path ="/error/500" element={<ErrorPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
