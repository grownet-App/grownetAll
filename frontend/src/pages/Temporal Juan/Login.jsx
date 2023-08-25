import axios from "axios";
import React, { useState } from "react";
import { loginApiUrl, registerApiUrl } from "../../config/urls.config";

function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async () => {
    try {
      await axios.post(registerApiUrl, { email, role, password });
      setMessage("Usuario registrado exitosamente");
      console.log({ email, role, password });
    } catch (error) {
      setMessage("Ocurrió un error al registrar el usuario");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(loginApiUrl, { email, password });
      const token = response.data.token;
      // Aquí puedes almacenar el token en el almacenamiento local o en una cookie para usarlo posteriormente
      setMessage("Inicio de sesión exitoso");
    } catch (error) {
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h1>Inicio de login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="text"
        placeholder="Rol"
        value={role}
        onChange={handleRoleChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
