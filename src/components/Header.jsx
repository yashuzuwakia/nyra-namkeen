import React from "react";
import "./Header.css";
import cover from "../assets/images/homehead1.png"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="title">
            <img src={logo} alt="Nyra Namkeen" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img src={cover} alt="" />
      </div>
    </header>
  );
};

export default Header;
