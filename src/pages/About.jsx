import React from "react";
import "./About.css";
import logo from "../assets/images/logo.png"; // Adjust the path based on your project structure
import cover from "../assets/images/finalcover.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="logo-container">
        <img src={logo} alt="Nyra Namkeen Logo" className="about-logo" />
      </div>
      <h1 className="about-heading">About Us</h1>
      <p className="about-text">
        <center>
          Welcome to <strong>Yashika Foods & Snacks Enterprises</strong>
        </center>
      </p>
      <p className="about-text">
        The home of irresistible flavors and unmatched quality. Authentic
        Handmade Spices for Unmatched Flavor At Nyra Namkeen, we take pride in
        crafting our own handmade spices, sourced from the finest locations
        across India. Every spice we use is carefully selected to ensure
        unmatched aroma, taste, and authenticity. Unlike brands that rely on
        third-party suppliers, we oversee the entire process—from sourcing to
        blending—guaranteeing the highest quality and purity. Our commitment to
        excellence means that every bite of our namkeen is enriched with the
        perfect balance of flavors, crafted with passion and tradition. When you
        choose Nyra Namkeen, you're not just savoring a snack; you're
        experiencing the richness of handpicked ingredients and time-honored
        recipes. Indulge in the purest taste of India, where quality is never
        compromised!
      </p>
      <p className="about-text">
        At <strong>Yashika Snacks Private Limited</strong>, we are passionate
        about crafting the finest namkeen mixtures that delight your taste buds
        and bring joy to your snacking experience. Under our brand name{" "}
        <strong>Nyra Namkeen</strong>, we proudly combine traditional recipes
        with modern techniques to offer you a perfect blend of taste, texture,
        and freshness.
      </p>
      <img src={cover} alt="" className="cover" />
      <h2 className="story-heading">Our Story</h2>
      <p className="about-text">
        It all started with a dream. Our journey began with{" "}
        <strong>Balmiky</strong>, a visionary and our dear friend, who always
        dreamed of creating something unique and meaningful back in our college
        days. From late-night brainstorming sessions in the hostel to endless
        cups of chai, his idea of crafting a namkeen mixture that would
        revolutionize taste stayed alive.
      </p>
      <p className="about-text">
        Years passed, and as software developers working in different cities,{" "}
        <strong>Rajat</strong>, <strong>Sudhanshu</strong>,{" "}
        <strong>Yashwant</strong>, and <strong>Balmiky</strong> decided to
        reunite and turn his dream into reality. With our collective skills,
        passion, and unwavering belief in his vision, we embarked on this
        incredible journey to bring a new taste to the world.
      </p>
      <p className="about-text">
        Combining Balmiky’s dream with our technical expertise, we built{" "}
        <strong>Nyra Namkeen</strong>—a brand that blends traditional flavors
        with a modern twist. We believe in more than just making snacks; we
        believe in creating moments of joy and connection.
      </p>
      <p className="about-text">
        Every packet of <strong>Nyra Namkeen</strong> is a result of countless
        hours of hard work, love, and dedication from four friends who dared to
        dream big.
      </p>
      <p className="about-text">
        Our tagline, <em>"Taste Nahi, Feelings Hai!"</em>, reflects the heart
        and soul we pour into every product. It’s not just namkeen; it’s a taste
        that connects with your emotions and brings back cherished memories.
      </p>
      <p className="about-text">
        Thank you for being a part of our journey. We are excited to continue
        serving you the best of Indian namkeen for years to come.
      </p>
    </div>
  );
}
