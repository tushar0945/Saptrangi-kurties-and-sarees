import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Product/ProductDetails";
import CategoryPage from "../pages/Category/CategoryPage";
import CartPage from "../pages/Cart/CartPage";
import AboutUs from "../pages/Company/AboutUs";
import TermsConditions from "../pages/Company/TermsConditions";
import PrivacyPolicy from "../pages/Company/PrivacyPolicy";
import SearchResults from "../pages/Search/SearchResults";

import AdminLayout from "../admin/layout/AdminLayout";
// import AdminDashboard from "../admin/layout/AdminDashboard";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRoute from "../components/auth/AdminRoute";

// Protected pages
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import Checkout from "../pages/Checkout/Checkout";
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

import PrivateRoute from "../components/auth/PrivateRoute";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* ======================== PUBLIC ROUTES ======================== */}

      <Route path="/" element={<Home />} />

      <Route path="/collection/:productSlug" element={<ProductDetails />} />

      <Route path="/category/:categorySlug" element={<CategoryPage />} />
      <Route path="/search" element={<SearchResults />} />

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
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
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
        path="/account"
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
