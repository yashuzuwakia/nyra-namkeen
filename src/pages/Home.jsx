import React from "react";
import SiteChrome from "../components/SiteChrome";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "./Products";
import LegacySection from "../components/LegacySection";
import WhyChoose from "../components/WhyChoose";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <SiteChrome />
      <main>
        <Hero />
        <Products />
        <LegacySection />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
