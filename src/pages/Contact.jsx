import React from "react";
import { FaInstagram, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./Contact.css";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.115278772479!2d84.983243!3d25.1317932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cba7c6bc8745%3A0x2cbb0cd994f51fb0!2sYashika%20Snacks%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1736023662159!5m2!1sen!2sin";

export default function Contact() {
  const { refs } = useScroll();

  return (
    <section
      className="contact"
      ref={refs.contactRef}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__banner">
        <h2 id="contact-title">Get in touch</h2>
        <p>Orders, distribution, and partnerships — we&apos;re happy to help.</p>
      </div>
      <div className="contact__inner">
        <div className="contact__grid">
          <div className="contact__card">
            <h3>Contact details</h3>
            <p>
              <FaPhone aria-hidden />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            </p>
            <p>
              <FaEnvelope aria-hidden />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p className="contact__address">{SITE.address}</p>
          </div>
          <div className="contact__card">
            <h3>Follow {SITE.name}</h3>
            <div className="contact__social">
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube /> YouTube
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
          <div className="contact__card contact__card--wide">
            <h3>Visit us</h3>
            <div className="contact__map">
              <iframe
                src={MAP_EMBED}
                title="Yashika Snacks location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
