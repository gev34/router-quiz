import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";


export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { userLogin } = useAuth();
  const { userPassword } = useAuth();


  return userLogin && userPassword ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
