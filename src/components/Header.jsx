import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menyRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if(menyRef.current && !menyRef.current.contains(EventTarget.target)){
        setMenuActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="title">
          <img src={logo} alt="Nyra Namkeen" className="logo" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={menuActive ? "active" : ""} ref={menyRef}>
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
    </header>
  );
};

export default Header;
