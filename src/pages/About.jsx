import React from "react";
import "./About.css";
import logo from "../assets/images/logo.png"; // Adjust the path based on your project structure

export default function About() {
  return (
    <div className="about-container">
      <div className="logo-container">
        <img src={logo} alt="Nyra Namkeen Logo" className="about-logo" />
      </div>
      <h1 className="about-heading">About Us</h1>
      <p className="about-text">
        Welcome to <strong>Yashika Snacks Private Limited</strong>, the home of irresistible flavors and unmatched quality.
      </p>
      <p className="about-text">
        At <strong>Yashika Snacks Private Limited</strong>, we are passionate about crafting the finest namkeen mixtures that delight your taste buds and bring joy to your snacking experience. Under our brand name <strong>Nyra Namkeen</strong>, we proudly combine traditional recipes with modern techniques to offer you a perfect blend of taste, texture, and freshness.
      </p>
      <p className="about-text">
        Our journey began with a simple yet ambitious vision: to create premium-quality snacks that connect with the heart and soul of India. Each product in the <strong>Nyra Namkeen</strong> range is crafted with care, using the finest ingredients and authentic flavors, ensuring a delicious experience in every bite.
      </p>
      <p className="about-text">
        We believe in more than just making snacks—we believe in creating moments of happiness for families and friends. Our tagline, <em>"Taste Nahi, Feelings Hai!"</em>, embodies our commitment to serving snacks that are not only delicious but also evoke cherished memories and emotions.
      </p>
      <p className="about-text">
        With a focus on quality, innovation, and customer satisfaction, <strong>Nyra Namkeen</strong> is dedicated to becoming a household name in India and beyond. Whether it’s a tea-time gathering, a festive celebration, or a late-night craving, we’re here to make your moments special.
      </p>
      <p className="about-text">
        Thank you for choosing <strong>Nyra Namkeen</strong>. We’re excited to be a part of your journey and look forward to serving you the best of Indian namkeen for years to come.
      </p>
    </div>
  );
}
