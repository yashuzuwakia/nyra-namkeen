import React, { useRef } from "react";

import logo from "../assets/images/logo.png";
import video from "../assets/videos/video.MP4";
import cover from "../assets/images/finalcover.png";

import "./Home.css";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        productRef={productRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div className="home" ref={homeRef}>
        <img src={logo} alt="" className="logo" />
        <h1>Welcome to Nyra Namkeen</h1>
        <p>Taste Nahi, Feelings Hai!</p>
        <img src={cover} alt="" className="cover" />
        <video
          src={video}
          className="video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          controlsList="nodownload noplaybackrate"
        />
      </div>
      <div ref={productRef}>
        <Products />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
