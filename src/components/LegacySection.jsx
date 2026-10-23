import React from "react";
import cover from "../assets/images/finalcover.png";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./LegacySection.css";

export default function LegacySection() {
  const { refs, scrollToContact } = useScroll();

  return (
    <section
      className="legacy"
      ref={refs.aboutRef}
      id="about"
      aria-labelledby="legacy-title"
    >
      <div className="legacy__inner">
        <div className="legacy__media">
          <img src={cover} alt="Nyra Namkeen range" loading="lazy" />
        </div>
        <div className="legacy__content">
          <p className="legacy__eyebrow">Our story</p>
          <h2 id="legacy-title" className="legacy__title">
            A legacy crafted with passion
          </h2>
          <p className="legacy__lead">
            From <strong>{SITE.company}</strong> in Bihar to homes across India —
            discover how four friends turned a dream into {SITE.name}, an iconic
            namkeen brand built on handmade spices and honest recipes.
          </p>
          <p className="legacy__text">
            We source and blend our own spices — no shortcuts, no compromise.
            Every pack carries the warmth of tradition and the crunch you remember
            from childhood tea-time.
          </p>
          <p className="legacy__quote">
            <em>&ldquo;{SITE.tagline}&rdquo;</em>
          </p>
          <button type="button" className="legacy__link" onClick={scrollToContact}>
            Partner with us
          </button>
        </div>
      </div>
    </section>
  );
}
