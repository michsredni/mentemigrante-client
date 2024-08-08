import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import UserProfile from './pages/UserProfile';
import PsicoList from './pages/PsicoList';
import PsicoDetails from './pages/PsicoDetails';
import TallerList from './pages/TallerList';
import TallerDetails from './pages/TallerDetails';
import CreateTablero from './pages/CreateTablero';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import EditTablero from './pages/EditTablero';
import CreateTaller from './pages/CreateTaller';
import EditTaller from './pages/EditTaller';
import Navbar from './components/Navbar'


function App() {


  return ( 
    <div>

      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/registro" element={<SignupPage/>}/>
        <Route path ="/iniciar-sesion" element={<LoginPage/>}/>
        <Route path ="/sobre-nosotros" element={<AboutUsPage/>}/>
        <Route path ="/perfil" element={<UserProfile/>}/>
        <Route path ="/psicologos" element={<PsicoList/>}/>
        <Route path ="/psicologos/:psicoId" element={<PsicoDetails/>}/>
        <Route path ="/talleres" element={<TallerList/>}/>
        <Route path ="/talleres/crear" element={<CreateTaller/>}/>
        <Route path ="/talleres/:tallerId" element={<TallerDetails/>}/>
        <Route path ="/talleres/:tallerId/editar" element={<EditTaller/>}/>
        <Route path ="/tablero-creativo/crear" element={<CreateTablero/>}/>
        <Route path ="/tablero-creativo/:tableroId/editar" element={<EditTablero/>}/>   
        <Route path ="/usuarios" element={<UserList/>}/>
        <Route path ="/usuarios/:usuarioId" element={<UserDetails/>}/>

        
      </Routes>
      
    </div>
  )
}

export default App
