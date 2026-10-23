import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Home", action: "scrollToHome" },
  { label: "Shop", action: "scrollToProducts" },
  { label: "Our story", action: "scrollToAbout" },
  { label: "Contact", action: "scrollToContact" },
];

export default function Header() {
  const scroll = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (action) => {
    scroll[action]?.();
    setMenuOpen(false);
  };

  return (
    <header className={`header${menuOpen ? " header--menu-open" : ""}`}>
      <button
        type="button"
        className="header__backdrop"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
      <div className="header__inner">
        <button
          type="button"
          className="header__brand"
          onClick={() => handleNav("scrollToHome")}
          aria-label={`${SITE.name} home`}
        >
          <img src={logo} alt="" className="header__logo" width={70} height={70} />
          <span className="header__brand-text">{SITE.name}</span>
        </button>

        <nav className="header__nav" aria-label="Main">
          <ul id="main-nav" className="header__links">
            {NAV_ITEMS.map(({ label, action }) => (
              <li key={action}>
                <button type="button" onClick={() => handleNav(action)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="header__cta header__cta--drawer"
            onClick={() => handleNav("scrollToProducts")}
          >
            Shop namkeen
          </button>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__cta"
            onClick={() => handleNav("scrollToProducts")}
          >
            Shop namkeen
          </button>
          <button
            type="button"
            className="header__toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
