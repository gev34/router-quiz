import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import loginData from "../Datas/LoginData/loginData";
import { useState } from "react";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { userLogin } = useAuth();
  const { userPassword } = useAuth();
  const [loginValidaty, setLoginValidaty] = useState(false);

  return userLogin && userPassword ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
