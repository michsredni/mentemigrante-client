import React from 'react'
import PsicoCard from "../components/UserCard"
import service from '../service/service.config';

function PsicoList() {
  const [psicos, setPsicos] = useState([]);

useEffect (() => {
getData()

}, []);

const getData = async () => {
  try {
    const response = await service.get('/usuarios/:tipoRol/rol')
    
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
    <div>

      {psicos.map((eachPsico) => {
        return(
          <PsicoCard  key={eachPsico._id} eachPsico={eachPsico}/>
        )
      })}
    </div>
  )
}

export default PsicoList