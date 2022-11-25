import React, { useState } from "react";

import Sidebar from "./Sidebar";
import apiPatient from "../api/pm.api";
import "./Acompanhamento.css";

const inicialForm = {
  peso: 0,
  medida: 0,
  hip: 0,
  procedimentos: "",
  mensagem: "",
};

function Acompanhamento() {
  const [form, setForm] = useState(inicialForm);

  const onChange = (e) => {
    const { value, name } = e.target;

    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("aqui");
      await apiPatient.acompanhamento({
        weight: form.peso,
        abdominalCircumference: form.medida,
        hipCircumference: form.hip,
        followedSteps: form.procedimentos,
        messageToDoctor: form.mensagem,
      });

      setForm(inicialForm);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="acompanhamento">
      <Sidebar />
      <main className="main1">
        <h3>ACOMPANHAMENTO</h3>
        <form className="formacomp" onSubmit={handleSubmit}>
          <label>
            Peso:
            <input
              type="number"
              onChange={onChange}
              name="peso"
              value={form.peso}
            />
          </label>

          <label>
            Circunferência Abdominal:
            <input
              type="number"
              onChange={onChange}
              name="medida"
              value={form.medida}
            />
          </label>

          <label>
            HIP Circunferência:
            <input
              type="number"
              onChange={onChange}
              name="hip"
              value={form.hip}
            />
          </label>

          <label>
            Seguiu as instruções diarimente:
            <input
              type="text"
              onChange={onChange}
              name="procedimentos"
              value={form.procedimentos}
            />
          </label>

          <label>
            Mensagem para o doutor:
            <textarea
              type="text"
              onChange={onChange}
              name="mensagem"
              value={form.mensagem}
            />
          </label>

          <div>
            <button type="submit" className="Button">
              ENVIAR
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Acompanhamento;
