import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("auth_token"); // <-- FIXED

  return token ? children : <Navigate to="/login" replace />;
}
