import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import service from '../service/service.config';
import PsicoCard from '../components/PsicoCard';

function PsicoList() {
  const [psicos, setPsicos] = useState([]);

  useEffect (() => {
  getData()
  }, []);

  const getData = async () => {
  try {
    const response = await service.get('/usuarios/psicologo/rol')
    console.log(response.data)
    setPsicos(response.data)
    
  } catch (error) {
    console.log(error)
  }
  }

  if(psicos === null){
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading users data...</span>
      </Spinner>
    );
  }

  return (
    <div className="tallerList-container">
      <h1 style={{ marginBottom: "3vh", color: "#B43F3F", marginTop: "4vh" }}>Psicólogos</h1>
      <div className='talleres-div'>
        {psicos.map((eachPsico) => {
        return(
          <PsicoCard key={eachPsico._id} eachPsico={eachPsico}/>
        )
      })}
      </div>
      
    </div>
  )
}

export default PsicoList