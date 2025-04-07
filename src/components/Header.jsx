import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ homeRef, productRef, aboutRef, contactRef }) => {
  const [menuActive, setMenuActive] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setMenuActive(false); // Close menu when resizing to desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const offset = 80;
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (isMobile) {
      setMenuActive(false); // Close menu after clicking a link
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link className="title" onClick={() => scrollToSection(homeRef)}>
          <img src={logo} alt="Nyra Namkeen" className="logo" />
        </Link>

        {isMobile && (
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰ {/* Change icon on toggle */}
          </button>
        )}
        {menuActive ? (
          <ul className={menuActive ? "active" : ""}>
            <li onClick={() => scrollToSection(productRef)}>
              <Link>Products</Link>
            </li>
            <li onClick={() => scrollToSection(aboutRef)}>
              <Link>About Us</Link>
            </li>
            <li onClick={() => scrollToSection(contactRef)}>
              <Link>Contact</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Header;
