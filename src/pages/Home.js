import React from "react";
import "./Home.css";
import FotoRaphael from "../Images/FotoRaphael.png";

function Home() {
  return (
    <div>
    <div className="background">
      <div className="box">

        <img src={FotoRaphael} className="Foto" alt="FotoMedico" />
        <h1 className="titulo">
          DEIXE SEU CORPO FALAR POR VOCÊ
        </h1>

      </div>
    </div>
    <div>
        
    </div>
    
    </div>
  );
}

export default Home;
