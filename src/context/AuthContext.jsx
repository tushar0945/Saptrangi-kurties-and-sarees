// import { createContext, useContext, useEffect, useState } from "react";
// import { AuthService } from "../services/authService";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   // Load session on refresh
//   useEffect(() => {
//     const session = AuthService.getAuthSession();
//     if (session) {
//       setUser(session.user);
//       setToken(session.token);
//     }
//   }, []);

//   const login = (user, token) => {
//     setUser(user);
//     setToken(token);
//     AuthService.setAuthSession(user, token);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     AuthService.logout();
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook shortcut
// export const useAuth = () => useContext(AuthContext);

// services / authService.js;

import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const session = AuthService.getAuthSession();
    if (session) {
      setUser(session.user);
      setToken(session.token);
    }
  }, []);

  const login = (user, token) => {
    // Save fresh updated user to session
    AuthService.setAuthSession(user, token);

    // Reload session from localStorage
    const fresh = AuthService.getAuthSession();

    setUser(fresh.user);
    setToken(fresh.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    AuthService.logout();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
