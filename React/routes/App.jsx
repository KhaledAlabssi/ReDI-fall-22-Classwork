import { useState } from "react";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Pricing from "./Pricing";
import Product from "./Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
