import { useState } from "react";
import { useNavigate } from "react-router-dom";


import apiPatient from "../api/pm.api";


import "./Signup.css";

const Login = ({validarToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
      
      await apiPatient.login({email, password})
      console.log('tentando o login')
      await validarToken();
      
      
      navigate ('/dashclient')
      
    } catch (error) {
      window.alert(error.message)
    }

  };
  console.log("Antes do return");
  return (
    <div className="backgroundSignup">
      <div className="Signup">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
