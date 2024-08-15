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
    <>
      <h1>Psicólogos</h1>
      <div className='psicoList-container'>
        {psicos.map((eachPsico) => {
        return(
          <PsicoCard key={eachPsico._id} eachPsico={eachPsico}/>
        )
      })}
      </div>
      
    </>
  )
}

export default PsicoList