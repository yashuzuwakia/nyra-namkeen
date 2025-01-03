import React, { useState } from "react";
import "./Header.css";
import cover from "../assets/images/homehead1.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="title">
          <img src={logo} alt="Nyra Namkeen" className="logo" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={menuActive ? "active" : ""}>
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
        <img src={cover} alt="Home Cover" />
      </div>
    </header>
  );
};

export default Header;
