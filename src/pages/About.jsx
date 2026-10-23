import React from "react";
import logo from "../assets/images/logo.png";
import cover from "../assets/images/finalcover.png";
import SectionHeading from "../components/SectionHeading";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./About.css";

const HIGHLIGHTS = [
  { label: "Handmade spices", detail: "Sourced & blended in-house" },
  { label: "Traditional recipes", detail: "Modern quality standards" },
  { label: "Made in Bihar", detail: "Proudly local" },
];

export default function About() {
  const { refs } = useScroll();

  return (
    <section
      className="about-section"
      ref={refs.aboutRef}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-section__inner">
        <SectionHeading id="about-heading" title="About us" />
        <div className="about-card">
          <img src={logo} alt={`${SITE.name} logo`} className="about-card__logo" />
          <p className="about-card__lead">
            Welcome to <strong>{SITE.company}</strong> — the home of irresistible
            flavors and unmatched quality.
          </p>
          <p className="about-card__text">
            At Nyra Namkeen, we craft our own handmade spices from the finest
            locations across India. Every spice is carefully selected for aroma,
            taste, and authenticity. We oversee sourcing through blending, so
            every bite carries the perfect balance of tradition and care.
          </p>
          <ul className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label}>
                <span className="about-highlights__label">{item.label}</span>
                <span className="about-highlights__detail">{item.detail}</span>
              </li>
            ))}
          </ul>
          <img
            src={cover}
            alt="Nyra Namkeen products"
            className="about-card__cover"
            loading="lazy"
          />
          <h3 className="about-card__story-title">Our story</h3>
          <p className="about-card__text">
            Every packet of <strong>Nyra Namkeen</strong> comes from four friends
            who dared to dream big — countless hours of hard work, love, and
            dedication in every batch.
          </p>
          <p className="about-card__quote">
            <em>&ldquo;{SITE.tagline}&rdquo;</em> — it&apos;s not just namkeen;
            it&apos;s a taste that connects with your emotions and cherished
            memories.
          </p>
          <p className="about-card__text">
            Thank you for being part of our journey. We&apos;re excited to serve
            you the best of Indian namkeen for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}
