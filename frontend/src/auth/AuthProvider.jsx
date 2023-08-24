import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import axios from 'axios';
export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const history = useNavigate();
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const login = async (userCredentials, fromLocation) => {

        try {

            const response = await axios.post('http://localhost:5000/login', { email: userCredentials.email, password: userCredentials.password, role: userCredentials.role });
            const token = response.data.token;
            console.log(response.data);
            console.log(response);
            setUser({ email: userCredentials.email, password: userCredentials.password });
            if (fromLocation) {
                history(fromLocation);
            }
            
            //setMessage('Inicio de sesión exitoso');
        } catch (error) {
            console.log(error);
            setMessage('Credenciales incorrectas');
        }
    }



    const logout = () => setUser(null);
    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    }



    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>;
}