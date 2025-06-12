import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";
import Test from "./Test";
import Cart from "./Cart";
import Logout from "./Logout";
import Order from "./Order";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export const AppContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState();
  const [orders, setOrders] = useState([]);
  return (
    <div>
      <AppContext.Provider value={{users, setUsers, cart, setCart, email, setEmail, orders, setOrders}}>
        <BrowserRouter>
          <Header name="Mu-React-Store" />
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order" element={<Order />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;
