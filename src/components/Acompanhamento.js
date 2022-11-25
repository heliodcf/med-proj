import React, { useState } from "react";

import Sidebar from './Sidebar'

import './Acompanhamento.css'

function Acompanhamento() {
    const [form, setForm] = useState({
        
        peso:'',
        medida:'',
        hip:'',
        procedimentos:'',
        mensagem:'',
    });

    const onChange = (e) => {
        const {value, name} = e.target;

        setForm((state) => ({
            ...state,
            [name]: value
    }))
    }

    const showData = () => {
        console.log('form: ',form)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="acompanhamento">
      <Sidebar />
      <main className="main1">
        <h3>ACOMPANHAMENTO</h3>
        <form className="formacomp"
        onSubmit={onSubmit}>

         <label>
            Peso: 
            <input type="text" onChange={onChange} name="peso" value={form.peso}/>
         </label>     
 
            <label>
            Circunferência Abdominal: 
            <input type="text" onChange={onChange} name="medida" value={form.medida}/>
         </label>     
         
        
         <label>
            HIP Circunferência: 
            <input type="text" onChange={onChange} name="hip" value={form.hip}/>
         </label>     
        
            <label>

            Seguiu as instruções diarimente: 
            <input type="text" onChange={onChange} name="procedimentos" value={form.procedimentos}/>
         </label>   
          
   

         <label>
         Mensagem para o doutor: 
         <textarea type="text" onChange={onChange} name="mensagem" value={form.mensagem}/>

         </label>








   <div>
       <button className="Button" onClick={showData}>ENVIAR</button>
   </div>
            
            
         
        </form>
      </main>
    </div>
  );
}

export default Acompanhamento