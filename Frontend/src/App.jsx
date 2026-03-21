import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

// ✅ IMPORT NAVBAR + FOOTER
import Navbar from "./components/HomePageComponents/Navbar";
import Footer from "./components/HomePageComponents/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ NAVBAR HAR PAGE PAR */}
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      {/* ✅ FOOTER HAR PAGE PAR */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;