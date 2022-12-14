import React, { useEffect, useState } from 'react'
import SidebarMedico from '../components/SidebarMedico'
import { Link } from 'react-router-dom'
import apiPatient from '../api/pm.api'

function AnamneseMedico() {
  const [anamenesedr, setAnamenesedr] = useState([])

  const getAnamneseDR = async () => {
    const data = await apiPatient.anamneses()
    setAnamenesedr(data)
  }

  useEffect(() => {
    getAnamneseDR()
  }, [])

  return (
    <div className="dash">
      <SidebarMedico />
      <div className='acompanhamentos'>
      <ul>
      {anamenesedr.map(({_id, gender, createdAt}) => {
        return (
          <Link key={_id} to={`/anamneses/${_id}`}>
            <li>
              Ananmenese {gender} e foi criado em {new Date(createdAt).toLocaleDateString()}
            </li>
          </Link>
        )
      })}
      </ul>
      </div>
      </div>
  )
}

export default AnamneseMedico