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
