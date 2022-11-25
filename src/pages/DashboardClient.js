
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

import { useNavigate } from 'react-router-dom';

import "./DashboardCliente.css";



function DashboardClient({user}) {
    console.log(user)
    const navigate = useNavigate();
    useEffect(() => {
        if (user.role === 'doctor'){
            navigate ('/dashmedico')
        }
    }, [])

  return (

    <div className='dash'>
        <Sidebar />
        <main className='maindash'>
        Olá {user.username} <p> hoje é um ótimo dia para mudar de vida!</p>
        </main>
        </div>
  )
}

export default DashboardClient