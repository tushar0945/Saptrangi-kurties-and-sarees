// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home/Home";
// // import About from "../pages/About";
// // import Login from "../features/auth/pages/Login";
// // import Dashboard from "../features/admin/pages/Dashboard";
// // import ProtectedRoute from "./ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Home />} />
//       {/* <Route path="/about" element={<About />} />
//       <Route path="/login" element={<Login />} /> */}
//       {/* Protected (Authenticated) Routes */}
//       {/* <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       /> */}
//     </Routes>
//   );
// };

// export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Product/ProductDetails";
import CategoryPage from "../pages/Category/CategoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Product Details Page */}
      <Route path="/collection/:productSlug" element={<ProductDetails />} />

      <Route path="/category/:categorySlug" element={<CategoryPage />} />

      {/* Add more routes later */}
    </Routes>
  );
};

export default AppRoutes;
