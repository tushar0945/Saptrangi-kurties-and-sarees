import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // <-- import your auth hook

const LogoutHandler = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // <-- get logout from context

  useEffect(() => {
    logout(); // clears user, token, and localStorage
    navigate("/"); // redirect to home
  }, []);

  return null;
};

export default LogoutHandler;
