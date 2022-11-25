import SidebarMedico from '../components/SidebarMedico';

import "./DashboardCliente.css";

function DashboardMedico({user}) {
  return (

    <div className='dash'>
        <SidebarMedico />
        <main className='maindash'>
        Bem-vindo de volta Dr {user.username} <p> hoje é o dia de ajudar muitas pessoas!</p>
        </main>
        </div>
  )
}

export default DashboardMedico