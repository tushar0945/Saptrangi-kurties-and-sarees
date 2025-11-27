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
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import AccountPage from "../pages/Account/AccountPage";
import Orders from "../pages/Account/sections/Orders";
import Payments from "../pages/Account/sections/Payments";
import Wallet from "../pages/Account/sections/Wallet";
import Addresses from "../pages/Account/sections/Addresses";
import Profile from "../pages/Account/sections/Profile";
import Help from "../pages/Account/sections/Help";
import OrderDetails from "../pages/Account/sections/OrderDetails";
import OrderCancel from "../pages/Account/sections/OrderCancel";
import CancelSuccess from "../pages/Account/sections/CancelSuccess";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Product Details Page */}
      <Route path="/collection/:productSlug" element={<ProductDetails />} />

      <Route path="/category/:categorySlug" element={<CategoryPage />} />

      <Route path="/cart" element={<CartPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />

      <Route
        path="/order-details/:id"
        element={
          <AccountPage>
            <OrderDetails />
          </AccountPage>
        }
      />

      <Route path="/myaccount" element={<AccountPage />}>
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetails />} />
        <Route path="orders/:id/cancel" element={<OrderCancel />} />
        <Route path="orders/:id/cancelled" element={<CancelSuccess />} />

        <Route path="payments" element={<Payments />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
