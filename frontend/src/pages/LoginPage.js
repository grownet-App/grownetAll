import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import useAuth from "../auth/useAuth"
import { Container, Row, Col, Form, Button, FormGroup, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../helpers/routes';
import css from "../css/login.css";
import Dropdown from 'react-bootstrap/Dropdown';
import logo_blancov2 from '../img/logo_blancov2.svg';
import PhoneNumberValidation from './PhoneNumberValidation.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  }
  const { login } = useAuth()
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
      <img src={logo_blancov2} alt="logo-Grownet"/>
      <div className="login-form">
        <PhoneNumberValidation className="number-form"/>
    </div>
 
{/*     <Link className="bttn btn-secundary" to="/restaurants">Let’s Begin</Link> */}
    </section>
  );
}

export default Login;
/*<button className="bttn btn-secundary" onClick={() => login(userCredentials)}>Let’s Begin</button>*/