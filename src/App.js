import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Instituto from "./pages/Instituto";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import DashboardMedico from "./pages/DashboardMedico";
import DashboardClient from "./pages/DashboardClient";
import Anaminese from "./pages/Anaminese";
import Acompanhamento from "./components/Acompanhamento";

import {useState, useEffect} from 'react';

import apiPatient from "./api/pm.api";
import AnamneseMedico from "./pages/AnamneseMedico";
import AcompanhamentoMedico from "./pages/AcompanhamentoMedico";

import AcompanhamentoMedicoDetalhe from "./pages/AcompanhamentoMedicoDetalhe";

function App() {

  const [user, setUser] = useState({});

const validarToken = async () => {
     const userInfo = await apiPatient.verify()
     setUser(userInfo)
    }

  useEffect (() => {
    
    validarToken();
  }, [])


  return (
    <div>
      <Navbar isUserLoggedIn={!!user._id} setUser={setUser}/>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instituto" element={<Instituto />} />
          <Route path="/login" element={<LoginPage validarToken={validarToken} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashmedico" element={<DashboardMedico user={user}/>} />
          <Route path="/dashclient" element={<DashboardClient user={user}/>} />
          <Route path="/anaminese" element={<Anaminese validarToken={validarToken}/>} />
          <Route path="/acompanhamento" element={<Acompanhamento validarToken={validarToken}/>} />  
          <Route path="/acompanhamentos" element={<AcompanhamentoMedico />} />
          <Route path="/acompanhamentos/:id" element={<AcompanhamentoMedicoDetalhe />} />
          <Route path="/anamineses" element={<AnamneseMedico />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
