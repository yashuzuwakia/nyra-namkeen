import React from "react";
import { FaLeaf, FaAward, FaHeart, FaMapMarkedAlt } from "react-icons/fa";
import "./WhyChoose.css";

const ITEMS = [
  {
    icon: FaLeaf,
    title: "Handmade spices",
    text: "Sourced and blended in-house for purity and aroma.",
  },
  {
    icon: FaAward,
    title: "Quality first",
    text: "Every batch is crafted with care and strict standards.",
  },
  {
    icon: FaHeart,
    title: "Made with love",
    text: "Four friends, one dream — feelings in every bite.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Roots in Bihar",
    text: "Proudly made in Jehanabad, serving all of India.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why__inner">
        <h2 id="why-title" className="why__title">Why choose Nyra Namkeen?</h2>
        <div className="why__grid">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="why__card">
              <span className="why__icon" aria-hidden>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
