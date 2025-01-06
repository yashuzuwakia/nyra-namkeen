import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Nyra Namkeen</h2>
          <p>
            Bringing you the finest namkeen blends that connect with the heart of India. Taste Nahi, Feelings Hai!
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/nyranamkeen" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com/@nyranamkeen?si=kU62v8Olp8QRFCU3" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> Jehanabad, Bihar, India</p>
          <p><FaEnvelope /> nyranamkeen@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Yashika Snacks Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
