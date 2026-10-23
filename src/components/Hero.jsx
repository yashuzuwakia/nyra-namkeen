import React, { useEffect, useState } from "react";
import cover from "../assets/images/finalcover.png";
import { PACKET_IMAGES } from "../constants/productImages";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./Hero.css";

const SLIDES = [
  {
    id: 1,
    eyebrow: "Star product · Mixture",
    title: "Premium namkeen mixture",
    text: "Our bestselling retail pack — crispy, delicious, and made with natural ingredients.",
    image: PACKET_IMAGES.mixture,
    imageClass: "hero__image--pack",
    cta: "Shop mixture",
  },
  {
    id: 2,
    eyebrow: SITE.tagline,
    title: "Bhujia sev & moong dal packs",
    text: "Authentic Indian namkeen pouches — perfect for kirana, gifting, and everyday snacking.",
    image: cover,
    imageClass: "",
    cta: "View all packs",
  },
];

export default function Hero() {
  const { refs, scrollToProducts } = useScroll();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="hero" ref={refs.homeRef} id="home" aria-label="Welcome">
      <div className="hero__slide">
        <div className="hero__copy">
          <p className="hero__eyebrow">{slide.eyebrow}</p>
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__text">{slide.text}</p>
          <button type="button" className="hero__cta" onClick={scrollToProducts}>
            {slide.cta}
          </button>
          <div className="hero__dots" role="tablist" aria-label="Hero slides">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero__visual hero__visual--pack">
          <div className="hero__pack-stage">
            <span className="hero__pack-tab" aria-hidden />
            <img
              key={slide.id}
              src={slide.image}
              alt=""
              className={`hero__image ${slide.imageClass}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
