import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AdminLogin from "./admin/pages/AdminLogin";

import { AuthProvider } from "./context/AuthContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";

import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";

function App() {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <Router>
          <ScrollToTop />

          <Routes>
            {/* 🔐 ADMIN LOGIN (NO WHATSAPP) */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* 🌐 USER ROUTES */}
            <Route
              path="/*"
              element={
                <MainLayout>
                  <AppRoutes />

                  {/* ✅ Floating WhatsApp for users */}
                  <FloatingWhatsApp />
                </MainLayout>
              }
            />

            {/* 🛠 ADMIN ROUTES (NO WHATSAPP) */}
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </Router>
      </AdminAuthProvider>
    </AuthProvider>
  );
}

export default App;
