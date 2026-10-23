import React from "react";
import { useScroll } from "../context/ScrollContext";
import "./ProductCard.css";

function formatPrice(amount) {
  return `₹${amount}/-`;
}

export default function ProductCard({
  name,
  hindiName,
  tagline,
  description,
  price,
  mrp,
  priceNote,
  weights,
  image,
  highlights,
  isStar,
}) {
  const { scrollToContact } = useScroll();

  return (
    <article
      className={`product-card product-card--pouch ${isStar ? "product-card--star" : ""}`}
    >
      {tagline && (
        <span
          className={`product-card__badge ${isStar ? "product-card__badge--star" : ""}`}
        >
          {tagline}
        </span>
      )}
      <div className="product-card__image-wrap">
        <span className="product-card__hang-tab" aria-hidden />
        <img
          src={image}
          alt={`${name} namkeen packet`}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">
          {name}
          {hindiName && <span className="product-card__hindi">{hindiName}</span>}
        </h3>
        {weights?.length > 0 && (
          <p className="product-card__weights">{weights.join(" · ")}</p>
        )}
        {highlights?.length > 0 && (
          <ul className="product-card__tags">
            {highlights.slice(0, 2).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <p className="product-card__description">{description}</p>
        <div className="product-card__pricing">
          {priceNote ? (
            <span className="product-card__price-note">{priceNote}</span>
          ) : (
            <span className="product-card__price">{formatPrice(price)}</span>
          )}
          {mrp && mrp > price && (
            <span className="product-card__mrp">{formatPrice(mrp)}</span>
          )}
        </div>
        <button
          type="button"
          className="product-card__btn"
          onClick={scrollToContact}
        >
          Enquire to order
        </button>
      </div>
    </article>
  );
}
