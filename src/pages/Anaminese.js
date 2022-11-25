import React, { useState } from "react";

import "./anaminese.css";

import Sidebar from "../components/Sidebar";

import apiPatient from "../api/pm.api";

const inicialForm = {
    genero: "",
    peso: 0,
    altura: 0,
    fumante: false,
    alcool: false,
    restricao: "",
    doenca: false,
    medicamento: true,
    hereditaria: "",
    dieta: false,
    perdadepeso: "",
    sono: 0,
    cansado: true,
    alergia: false,
    cirurgia: true,
  };

function Anaminese() {
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
  
      await apiPatient.anamnese({
        gender: form.genero,
        weight: form.peso,
        height: form.altura,
        isSmoker: form.fumante,
        isAlcoholic: form.alcool,
        exerciseRestriction: form.restricao,
        haveDisease: form.doenca,
        useMedicine: form.medicamento,
        hereditaryDisease: form.hereditaria,
        doDiet: form.dieta,
        diffcultyLosingWeight: form.perdadepeso,
        sleepTime: form.sono,
        wakeUpTired: form.cansado,
        medicineAllergy: form.alergia,
        someSurgery: form.cirurgia,
      });
      
      setForm(inicialForm);

    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="anaminese">
      <Sidebar />
      <main className="main">
        <h3>ANAMNESE</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Genero:
            <select onChange={onChange} name="genero">
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </label>
          <hr />
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
            Altura:
            <input
              type="number"
              onChange={onChange}
              name="altura"
              value={form.altura}
            />
          </label>
          <hr />
          <label>
            Fumante:
            <select onChange={onChange} name="fumante">
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>
          <label>
            Bebida alcoolica:
            <select onChange={onChange} name="alcool">
            <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>
          <hr />
          <label>
            Restrição de Exercício:
            <input
              type="text"
              onChange={onChange}
              name="restricao"
              value={form.restricao}
            />
          </label>
          <hr />
          <label>
            Alguma doença:
            <select onChange={onChange} name="doenca">
            <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>

          <hr />

          <label>
            Usa medicamento:
            <select onChange={onChange} name="medicamento">
            <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>

          <label>
            Doença Hereditária:
            <input
              type="text"
              onChange={onChange}
              name="hereditaria"
              value={form.hereditaria}
            />
          </label>

          <label>
            Faz dieta?
            <select onChange={onChange} name="dieta">
            <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>

          <hr />

          <label>
            Dificuldade paa perder peso:
            <input
              type="text"
              onChange={onChange}
              name="perdadepeso"
              value={form.perdadepeso}
            />
          </label>

          <hr />
          <label>
            Tempo de sono:
            <input
              type="number"
              onChange={onChange}
              name="sono"
              value={form.sono}
            />
          </label>

          <label>
            Acorda cansado?
            <select onChange={onChange} name="cansado">
            <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>

          <hr />

          <label>
            Toma remédio para alergia?
            <select onChange={onChange} name="alergia">
            <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>

          <label>
            Já fez alguma cirurgia?
            <select onChange={onChange} name="cirurgia" value={form.cirurgia}>
              <option value= {true} >Sim</option>
              <option value= {false} >Não</option>
            </select>
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

export default Anaminese;
