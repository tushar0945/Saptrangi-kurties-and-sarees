import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LogoutHandler = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout(); // clears context + localStorage
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return null;
};

export default LogoutHandler;
