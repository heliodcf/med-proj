
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Instituto from './pages/Instituto';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import DashboardMedico from './pages/DashboardMedico';

function App() {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/About' element={<About/> } />
        <Route path='/Instituto' element={<Instituto/> } />
        <Route path='/login' element={<LoginPage/> } />
        <Route path='/Signup' element={<Signup/> } />
        <Route path='/DashboardMedico'element={<DashboardMedico />} />
      </Routes>
    </div>
  );
}

export default App;
