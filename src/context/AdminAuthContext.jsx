import { createContext, useContext, useState } from "react";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin_auth")) || null
  );

  const login = (email, password) => {
    // 🔥 Hardcoded admin login for now (you can replace with backend later)
    if (email === "admin@saajnika.com" && password === "admin123") {
      const adminData = {
        email,
        role: "admin",
        token: "admin_jwt_token_123456",
      };

      localStorage.setItem("admin_auth", JSON.stringify(adminData));
      setAdmin(adminData);
      return { success: true };
    }

    return { success: false, message: "Invalid admin credentials" };
  };

  const logout = () => {
    localStorage.removeItem("admin_auth");
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
