import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-info">
        {/* Social Media Links */}
        <div className="contact-section">
          <h2>Connect with Us</h2>
          <div className="social-links">
            <a href="https://youtube.com/@nyranamkeen?si=kU62v8Olp8QRFCU3" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              YouTube
            </a>
            <a href="https://www.instagram.com/nyranamkeen" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              Instagram
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="contact-section">
          <h2>Our Location</h2>
          <p>
            Yashika Snacks Private Limited,  
            Hiramani Niwas, Lakshmi Nagar, 
            Kohara, Bihar, India.
          </p>
        </div>

        {/* Map */}
        <div className="contact-section">
          <h2>Find Us on Map</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.115278772479!2d84.983243!3d25.1317932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cba7c6bc8745%3A0x2cbb0cd994f51fb0!2sYashika%20Snacks%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1736023662159!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Details */}
        <div className="contact-section">
          <h2>Contact Details</h2>
          <p>📞 Phone: +91 9876543210</p>
          <p>✉️ Email: nyranamkeen@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
