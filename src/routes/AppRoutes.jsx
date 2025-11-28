// import React from "react";
// import { Routes, Route, Outlet } from "react-router-dom"; // ✅ FIXED

// import Home from "../pages/Home/Home";
// import ProductDetails from "../pages/Product/ProductDetails";
// import CategoryPage from "../pages/Category/CategoryPage";
// import CartPage from "../pages/Cart/CartPage";
// import CheckoutPage from "../pages/Checkout/CheckoutPage";
// import AccountPage from "../pages/Account/AccountPage";
// import Orders from "../pages/Account/sections/Orders";
// import Payments from "../pages/Account/sections/Payments";
// import Wallet from "../pages/Account/sections/Wallet";
// import Addresses from "../pages/Account/sections/Addresses";
// import Profile from "../pages/Account/sections/Profile";
// import Help from "../pages/Account/sections/Help";
// import OrderDetails from "../pages/Account/sections/OrderDetails";
// import OrderCancel from "../pages/Account/sections/OrderCancel";
// import CancelSuccess from "../pages/Account/sections/CancelSuccess";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Home */}
//       <Route path="/" element={<Home />} />

//       {/* Product Details */}
//       <Route path="/collection/:productSlug" element={<ProductDetails />} />

//       <Route path="/category/:categorySlug" element={<CategoryPage />} />

//       <Route path="/cart" element={<CartPage />} />

//       <Route path="/checkout" element={<CheckoutPage />} />

//       {/* 🔥 FIX: Order Details works on Mobile + Desktop */}
//       <Route
//         path="/order-details/:id"
//         element={
//           <AccountPage>
//             <Outlet />
//           </AccountPage>
//         }
//       >
//         <Route index element={<OrderDetails />} />
//       </Route>

//       {/* Main Account Routes */}
//       <Route path="/myaccount" element={<AccountPage />}>
//         <Route path="orders" element={<Orders />} />
//         <Route path="orders/:id" element={<OrderDetails />} />
//         <Route path="orders/:id/cancel" element={<OrderCancel />} />
//         <Route path="orders/:id/cancelled" element={<CancelSuccess />} />

//         <Route path="payments" element={<Payments />} />
//         <Route path="wallet" element={<Wallet />} />
//         <Route path="addresses" element={<Addresses />} />
//         <Route path="profile" element={<Profile />} />
//         <Route path="help" element={<Help />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Product/ProductDetails";
import CategoryPage from "../pages/Category/CategoryPage";
import CartPage from "../pages/Cart/CartPage";
import AboutUs from "../pages/Company/AboutUs";
import TermsConditions from "../pages/Company/TermsConditions";
import PrivacyPolicy from "../pages/Company/PrivacyPolicy";

import AdminLayout from "../admin/layout/AdminLayout";
// import AdminDashboard from "../admin/layout/AdminDashboard";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRoute from "../components/auth/AdminRoute";

// Protected pages
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import AccountPage from "../pages/Account/AccountPage";
import Orders from "../pages/Account/sections/Orders";
import OrderDetails from "../pages/Account/sections/OrderDetails";
import OrderCancel from "../pages/Account/sections/OrderCancel";
import CancelSuccess from "../pages/Account/sections/CancelSuccess";
import Payments from "../pages/Account/sections/Payments";
import Wallet from "../pages/Account/sections/Wallet";
import Addresses from "../pages/Account/sections/Addresses";
import Profile from "../pages/Account/sections/Profile";
import Help from "../pages/Account/sections/Help";
import CouponsEmpty from "../pages/Account/sections/CouponsEmpty";
import GiftCardsComingSoon from "../pages/Account/sections/GiftCardsComingSoon";

// OTP auth pages
import PhoneLogin from "../pages/Auth/PhoneLogin";
import OtpVerify from "../pages/Auth/OtpVerify";
import LogoutHandler from "../pages/Auth/LogoutHandler";

import PageNotFound from "../pages/NotFound/PageNotFound";

// Utils
import PrivateRoute from "../components/auth/PrivateRoute";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* ======================== PUBLIC ROUTES ======================== */}

      <Route path="/" element={<Home />} />

      <Route path="/collection/:productSlug" element={<ProductDetails />} />

      <Route path="/category/:categorySlug" element={<CategoryPage />} />

      <Route path="/cart" element={<CartPage />} />

      <Route path="/about" element={<AboutUs />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />

      {/* OTP LOGIN SIGNUP */}
      <Route path="/login" element={<PhoneLogin />} />
      <Route path="/verify-otp" element={<OtpVerify />} />
      <Route path="/logout" element={<LogoutHandler />} />

      {/* <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      /> */}

      {/* ======================== PROTECTED ROUTES ======================== */}

      {/* Checkout (must be logged in) */}
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      />

      {/* ORDER DETAILS PAGE (outside account, but protected) */}
      <Route
        path="/order-details/:id"
        element={
          <PrivateRoute>
            <AccountPage>
              <Outlet />
            </AccountPage>
          </PrivateRoute>
        }
      >
        <Route index element={<OrderDetails />} />
      </Route>
      <Route
        path="coupons"
        element={
          <PrivateRoute>
            <CouponsEmpty />
          </PrivateRoute>
        }
      />
      <Route
        path="gift-cards"
        element={
          <PrivateRoute>
            <GiftCardsComingSoon />
          </PrivateRoute>
        }
      />

      {/* MAIN ACCOUNT ROUTES */}
      <Route
        path="/myaccount"
        element={
          <PrivateRoute>
            <AccountPage />
          </PrivateRoute>
        }
      >
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
