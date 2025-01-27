import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detect initial screen width

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update the state based on window size
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="title">
          <img src={logo} alt="Nyra Namkeen" className="logo" />
        </Link>
        {isMobile?(<button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>): null}
        <ul className={menuActive ? "active" : ""}>
          {(menuActive || ! isMobile)?(
            <>
              <li onClick={toggleMenu}>
                <Link to="/products">Products</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/contact">Contact</Link>
              </li>
            </>
          ):null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
