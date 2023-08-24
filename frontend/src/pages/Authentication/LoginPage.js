import React, { useState } from "react";
import useAuth from "../../auth/useAuth";
import css from "../../css/login.css";
import PhoneNumberValidation from "./PhoneNumberValidation.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const message = "";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const userCredentials = {
    email: email,
    password: password,
  };
  const { login } = useAuth();
  /*   const handleLogin = async () => {
  
      try {
  
        const response = await axios.post('http://localhost:5000/login', { email, password });
        const token = response.data.token;
        console.log(response);
        console.log({ email });
        setMessage('Inicio de sesión exitoso');
      } catch (error) {
        console.log(error);
        setMessage('Credenciales incorrectas');
      }
    }; */

  return (
    <section className="login">
      <div className="login-form">
        <PhoneNumberValidation className="number-form" />
        <h2 href="">
          Don't have an account? <a href="/restaurants">Sign Up</a>
        </h2>
      </div>
    </section>
  );
}

export default Login;
/*<button className="bttn btn-secundary" onClick={() => login(userCredentials)}>Let’s Begin</button>*/
