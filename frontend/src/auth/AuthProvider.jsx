import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTokenStore from "../store/useTokenStore";

export const  AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { token } = useTokenStore();
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      token: token,
    });
    navigate("/restaurants");
  };

  const logout = () => setUser(null);

  // TODO CUANDO SE TENGAN LOS ROLES, USAR ESTE CODIGO
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
