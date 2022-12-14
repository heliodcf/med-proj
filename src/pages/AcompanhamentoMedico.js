import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiPatient from '../api/pm.api'
import SidebarMedico from '../components/SidebarMedico'

function AcompanhamentoMedico() {
  const [acompanhamentos, setAcompanhamentos] = useState([])

  const getAcompanhamentos = async () => {
    console.log(1)
    const data = await apiPatient.acompanhamentos()
    setAcompanhamentos(data)
    
  }
  
  useEffect(() => {
    getAcompanhamentos()
  }, [])

  return (
    <div className="dash">

      <SidebarMedico />
      <div className='acompanhamentos'>
      <ul>
      {acompanhamentos.map(({_id, weight, createdAt}) => {
    
        return (
          <Link key={_id} to={`/acompanhamentos/${_id}`}>
            <li>
        
              Check in com o peso {weight} e foi criado em {new Date(createdAt).toLocaleDateString()}
            </li>
          </Link>
        )
      })}
      </ul>
      </div>
      </div>
  )
}

export default AcompanhamentoMedico