// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// export default function PrivateRoute({ children }) {
//   const { isAuthenticated, loading } = useAuth();

//   // ⏳ Wait until auth state is restored from localStorage
//   if (loading) {
//     return null; // or a spinner / loader
//   }

//   // 🔒 Not logged in → redirect
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   // ✅ Logged in → allow access
//   return children;
// }

// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// export default function PrivateRoute({ children }) {
//   const { isAuthenticated, loading } = useAuth();
//   const location = useLocation();

//   if (loading) return null;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace state={{ from: location.pathname }} />;
//   }

//   return children;
// }

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // ⏳ IMPORTANT: wait until auth state is resolved
  if (loading) {
    return null; // or return <Loader />
  }

  // ❌ Not authenticated → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  // ✅ Authenticated → allow access
  return children;
}
