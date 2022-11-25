import React from "react";
import "./Home.css";
import FotoRaphael from "../Images/FotoRaphael.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="background">
        <div className="box">
          <img src={FotoRaphael} className="Foto" alt="FotoMedico" />
          <h1 className="titulo">DEIXE SEU CORPO FALAR POR VOCÊ</h1>
        </div>
      </div>
      <div className="Container">
        <>
          O Dr Raphael Cunha – sabiamente apelidado de Dr Emagrecimento devido
          sua experiência e resultados na área do emagrecimento. Atua nesta área
          há mais de 15 anos. Como médico, atua na área da medicina integrativa,
          com foco no emagrecimento, saúde e envelhecimento saudável. Seu olhar
          holístico conjuntamente a sua experiência técnica e científica é que
          faz com que o Dr Raphael Cunha humanize e individualize suas condutas
          no emagrecimento. Ele tem ajudado milhares de pessoas não só a
          emagrecerem, mas também melhorarem a estética, disposição, libido,
          imunidade, inflamação e dores, tendo sempre as evidencias científicas
          como parâmetro norteador.
          <h1>
            PROGRAMA DE EMAGRECIMENTO “DR EMAGRECIMENTO”{" "}
            <p>PRESENCIAL OU ONLINE</p>
          </h1>
          Ele desenvolveu ao longo dos anos, com seus estudos, pesquisas e
          experiência um programa de emagrecimento presencial e depois estendeu
          para o online visando ajudar pessoas que não podem ir até sua clínica
          por morarem longe. Após contato prévio com a equipe, via telefone ou
          whatsapp, os participantes recebem um login e senha para acessar a
          área de acesso restrito deste site, para inicio do programa.
        </>
        
      </div>
      <Link to='./Signup'>
      <button className="botCadastro">QUERO ME INSCREVER</button>
      </Link>
    </div>
  );
}

export default Home;
