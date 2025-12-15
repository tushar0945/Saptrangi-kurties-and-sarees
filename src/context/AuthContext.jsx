// // // import { createContext, useContext, useEffect, useState } from "react";
// // // import { AuthService } from "../services/authService";

// // // const AuthContext = createContext(null);

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);
// // //   const [accessToken, setAccessToken] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const session = AuthService.getAuthSession();

// // //     if (!session?.accessToken) {
// // //       setLoading(false);
// // //       return; // ❌ do NOT call refresh
// // //     }

// // //     const restoreSession = async () => {
// // //       try {
// // //         const { user, accessToken } = await AuthService.refresh();
// // //         setUser(user);
// // //         setAccessToken(accessToken);
// // //       } catch {
// // //         AuthService.clearSession();
// // //         setUser(null);
// // //         setAccessToken(null);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     restoreSession();
// // //   }, []);

// // //   // ✅ LOGIN
// // //   const login = ({ user, accessToken }) => {
// // //     AuthService.setAuthSession({ user, accessToken });
// // //     setUser(user);
// // //     setAccessToken(accessToken);
// // //   };

// // //   // 🚪 LOGOUT
// // //   const logout = async () => {
// // //     await AuthService.logout();
// // //     setUser(null);
// // //     setAccessToken(null);
// // //   };

// // //   return (
// // //     <AuthContext.Provider
// // //       value={{
// // //         user,
// // //         accessToken,
// // //         isAuthenticated: !!accessToken,
// // //         login,
// // //         logout,
// // //         loading,
// // //       }}
// // //     >
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// // import { createContext, useContext, useEffect, useState } from "react";
// // import { AuthService } from "../services/authService";

// // const AuthContext = createContext(null);

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const session = AuthService.getAuthSession();

// //     // ❌ No session → not logged in
// //     if (!session?.accessToken) {
// //       setLoading(false);
// //       return;
// //     }

// //     // ✅ Always restore from localStorage first
// //     setUser(session.user);
// //     setAccessToken(session.accessToken);

// //     const restoreSession = async () => {
// //       try {
// //         const { user, accessToken } = await AuthService.refresh();
// //         setUser(user);
// //         setAccessToken(accessToken);
// //       } catch (err) {
// //         // 🟡 Refresh failed → KEEP existing session
// //         console.warn("Refresh failed, using stored session");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     restoreSession();
// //   }, []);

// //   // ✅ LOGIN
// //   const login = ({ user, accessToken }) => {
// //     AuthService.setAuthSession({ user, accessToken });
// //     setUser(user);
// //     setAccessToken(accessToken);
// //   };

// //   // 🚪 LOGOUT (ONLY PLACE WE CLEAR)
// //   const logout = async () => {
// //     await AuthService.logout();
// //     setUser(null);
// //     setAccessToken(null);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         accessToken,
// //         isAuthenticated: !!accessToken,
// //         login,
// //         logout,
// //         loading,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);

// // import { createContext, useContext, useEffect, useState } from "react";
// // import { AuthService } from "../services/authService";

// // const AuthContext = createContext(null);

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const session = AuthService.getAuthSession();

// //     // ❌ No session
// //     if (!session?.accessToken) {
// //       setLoading(false);
// //       return;
// //     }

// //     // ✅ Restore immediately from localStorage
// //     setUser(session.user);
// //     setAccessToken(session.accessToken);

// //     // 🔄 Try refresh silently
// //     const restoreSession = async () => {
// //       try {
// //         const { user, accessToken } = await AuthService.refresh();
// //         setUser(user);
// //         setAccessToken(accessToken);
// //       } catch {
// //         // 🔒 Keep stored session
// //         console.warn("Refresh failed, using stored session");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     restoreSession();
// //   }, []);

// //   // ✅ Login
// //   const login = ({ user, accessToken }) => {
// //     AuthService.setAuthSession({ user, accessToken });
// //     setUser(user);
// //     setAccessToken(accessToken);
// //   };

// //   // 🚪 Logout
// //   const logout = async () => {
// //     await AuthService.logout();
// //     setUser(null);
// //     setAccessToken(null);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         accessToken,
// //         isAuthenticated: !!accessToken,
// //         login,
// //         logout,
// //         loading,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);

// import { createContext, useContext, useEffect, useState } from "react";
// import { AuthService } from "../services/authService";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // =========================
//   // RESTORE SESSION ON LOAD
//   // =========================
//   useEffect(() => {
//     const restore = async () => {
//       const session = AuthService.getAuthSession();

//       // ❌ No stored session
//       if (!session?.accessToken || !session?.user) {
//         setLoading(false);
//         return;
//       }

//       // ✅ Restore immediately (prevents redirect)
//       setUser(session.user);
//       setAccessToken(session.accessToken);

//       try {
//         // 🔄 Try silent refresh (OPTIONAL)
//         const refreshed = await AuthService.refresh();

//         if (refreshed?.accessToken && refreshed?.user) {
//           AuthService.setAuthSession(refreshed);
//           setUser(refreshed.user);
//           setAccessToken(refreshed.accessToken);
//         }
//       } catch (err) {
//         // ⚠️ IMPORTANT: DO NOT logout here
//         console.warn("Token refresh failed, using stored token");
//       } finally {
//         setLoading(false);
//       }
//     };

//     restore();
//   }, []);

//   // =========================
//   // LOGIN
//   // =========================
//   const login = ({ user, accessToken }) => {
//     AuthService.setAuthSession({ user, accessToken });
//     setUser(user);
//     setAccessToken(accessToken);
//   };

//   // =========================
//   // LOGOUT
//   // =========================
//   const logout = async () => {
//     try {
//       await AuthService.logout();
//     } finally {
//       AuthService.clearAuthSession(); // ⬅️ IMPORTANT
//       setUser(null);
//       setAccessToken(null);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         accessToken,
//         isAuthenticated: Boolean(accessToken),
//         login,
//         logout,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // RESTORE SESSION ON APP LOAD
  // =========================
  useEffect(() => {
    const restoreSession = async () => {
      const session = AuthService.getAuthSession();

      if (!session?.accessToken || !session?.user) {
        setLoading(false);
        return;
      }

      // Restore immediately
      setUser(session.user);
      setAccessToken(session.accessToken);

      try {
        // Optional silent refresh
        const refreshed = await AuthService.refresh();

        if (refreshed?.accessToken && refreshed?.user) {
          setUser(refreshed.user);
          setAccessToken(refreshed.accessToken);
        }
      } catch (err) {
        console.warn("Token refresh failed, continuing with stored token");
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  // =========================
  // LOGIN
  // =========================
  const login = ({ user, accessToken }) => {
    AuthService.setAuthSession({ user, accessToken });
    setUser(user);
    setAccessToken(accessToken);
  };

  // =========================
  // UPDATE USER (PROFILE SAVE)
  // =========================
  const updateUser = (updatedUser) => {
    AuthService.updateLocalUser(updatedUser);
    setUser(updatedUser);
  };

  // =========================
  // LOGOUT
  // =========================
  const logout = () => {
    AuthService.logout();
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isAuthenticated: Boolean(accessToken),
        loading,
        login,
        updateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
