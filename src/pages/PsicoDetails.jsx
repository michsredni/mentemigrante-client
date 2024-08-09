import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../service/service.config'

function PsicoDetails() {

  const params = useParams()
  const [onePsico, setOnePsico] = useState(null)

  useEffect(() => {
    getDataPsico()
  }, [])

  const getDataPsico = async () => {
    try {
      const response = await service.get(`/usuarios/${params.usuarioId}/id`)
      console.log(response.data)
      setOneUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>PsicoDetails</div>
  )
}

export default PsicoDetails