import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";

const AdminRoute = ({ children }) => {
  const { admin } = useAdminAuth();

  if (!admin) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default AdminRoute;
