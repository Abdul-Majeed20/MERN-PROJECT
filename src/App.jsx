// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/adminLayout";
import Home from "./pages/Home";
import About from "./pages/About"; // optional
import Products from "./components/Products";
import Orders from "./components/Orders";
import Users from "./components/Users";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./auth-pages/Login";
import Register from "./auth-pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />
        <Route
          path="/register"
          element={
            <PublicLayout>
              <Register />
            </PublicLayout>
          }
        />

        {/* Admin Pages */}
        <Route
          path="/adminDashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/products"
          element={
            <AdminLayout>
              <Products />
            </AdminLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <AdminLayout>
              <Orders />
            </AdminLayout>
          }
        />
        <Route
          path="/users"
          element={
            <AdminLayout>
              <Users />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
