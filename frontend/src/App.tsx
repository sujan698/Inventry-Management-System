import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Products from "././pages/products";
import AddProduct from "././pages/products/addProducts";
import Sales from "././pages/sales";
import AddSales from "././pages/sales/addSales";
import Login from "./pages/Header/Login";
import SignUp from "./pages/Header/Signup";
import Addorganization from "./pages/Header/Addorganization";
import AppLayout from "./pages/appLayout";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  return token ? <AppLayout /> : <Navigate to={"/login"} />;
};
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/add" element={<AddSales />} />
        <Route path="/organizations" element={<Addorganization />} />
      </Route>
    </Routes>
  );
}

export default App;
