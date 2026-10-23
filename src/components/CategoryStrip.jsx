import React from "react";
import { CATEGORIES } from "../data/products";
import "./CategoryStrip.css";

export default function CategoryStrip({ activeCategory, onSelect }) {
  const items = CATEGORIES.filter((c) => c.id !== "all");

  return (
    <section className="category-strip" aria-label="Product categories">
      <div className="category-strip__inner">
        {items.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-strip__item ${
              activeCategory === cat.id ? "is-active" : ""
            }`}
            onClick={() => onSelect(cat.id)}
          >
            {cat.label}
          </button>
        ))}
        <button
          type="button"
          className={`category-strip__item ${
            activeCategory === "all" ? "is-active" : ""
          }`}
          onClick={() => onSelect("all")}
        >
          View all
        </button>
      </div>
    </section>
  );
}
