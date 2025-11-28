import { Routes, Route } from "react-router-dom";
import AdminRoute from "../components/auth/AdminRoute";

// Layout
import AdminLayout from "../admin/layout/AdminLayout";

// Admin pages
import AdminLogin from "../admin/pages/AdminLogin";
import Dashboard from "../admin/pages/Dashboard";
// import Users from "../pages/Users";
import Products from "../admin/pages/products/Products";
import AddProduct from "../admin/pages/products/AddProduct";
import EditProduct from "../admin/pages/products/EditProduct";
import Categories from "../admin/pages/categories/Categories";
import AddCategory from "../admin/pages/categories/AddCategory";
import Orders from "../admin/pages/orders/Orders";
import OrderDetails from "../admin/pages/orders/OrderDetails";
import Users from "../admin/pages/users/Users";
import UserDetails from "../admin/pages/users/UserDetails";

function AdminRoutes() {
  return (
    <Routes>
      {/* ADMIN LOGIN (NO LAYOUT) */}
      <Route path="/login" element={<AdminLogin />} />

      {/* ADMIN DASHBOARD (PROTECTED + WITH ADMIN LAYOUT) */}
      <Route
        path="/"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        {/* <Route path="users" element={<Users />} /> */}
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/:id/edit" element={<EditProduct />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/add" element={<AddCategory />} />
        <Route path="categories/:id/edit" element={<EditProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetails />} />
        {/* <Route path="orders/:id/edit" element={<EditProduct />} /> */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
