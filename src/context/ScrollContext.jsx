import React, { createContext, useContext, useRef, useCallback } from "react";

const ScrollContext = createContext(null);

function getScrollOffset() {
  const chrome = document.querySelector(".site-chrome");
  if (chrome) {
    return chrome.getBoundingClientRect().height;
  }
  return 112;
}

export function ScrollProvider({ children }) {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = useCallback((ref) => {
    if (!ref?.current) return;
    const top =
      ref.current.getBoundingClientRect().top + window.scrollY - getScrollOffset();
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const value = {
    refs: { homeRef, productsRef, aboutRef, contactRef },
    scrollToSection,
    scrollToHome: () => scrollToSection(homeRef),
    scrollToProducts: () => scrollToSection(productsRef),
    scrollToAbout: () => scrollToSection(aboutRef),
    scrollToContact: () => scrollToSection(contactRef),
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return ctx;
}
