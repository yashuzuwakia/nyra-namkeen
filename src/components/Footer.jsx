import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./Footer.css";

export default function Footer() {
  const { scrollToAbout, scrollToProducts, scrollToContact, scrollToHome } =
    useScroll();

  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="footer__newsletter-inner">
          <div>
            <h2>Stay connected with {SITE.name}</h2>
            <p>Follow us for recipes, offers, and behind-the-scenes from our kitchen.</p>
          </div>
          <a
            className="footer__newsletter-btn"
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__brand-col">
          <button type="button" className="footer__logo-btn" onClick={scrollToHome}>
            <img src={logo} alt="" width={64} height={64} />
            <span>{SITE.name}</span>
          </button>
          <p>{SITE.tagline}</p>
        </div>
        <div className="footer__col">
          <h3>Shop</h3>
          <ul>
            <li><button type="button" onClick={scrollToProducts}>All products</button></li>
            <li><button type="button" onClick={scrollToProducts}>Mixture</button></li>
            <li><button type="button" onClick={scrollToProducts}>Bhujia sev</button></li>
            <li><button type="button" onClick={scrollToProducts}>Moong dal</button></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <ul>
            <li><button type="button" onClick={scrollToAbout}>Our story</button></li>
            <li><button type="button" onClick={scrollToContact}>Contact</button></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Reach us</h3>
          <p><FaMapMarkerAlt aria-hidden /> {SITE.location}</p>
          <p><FaPhoneAlt aria-hidden /> {SITE.phone}</p>
          <p><FaEnvelope aria-hidden /> {SITE.email}</p>
          <div className="footer__social">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {SITE.company}. All rights reserved.</p>
      </div>
    </footer>
  );
}
