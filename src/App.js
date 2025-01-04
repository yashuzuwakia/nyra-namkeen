import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Products from "./pages/Products"

import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
