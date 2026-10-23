import React from "react";
import { getStarProduct } from "../data/products";
import { SITE } from "../constants/site";
import { useScroll } from "../context/ScrollContext";
import "./StarProduct.css";

export default function StarProduct() {
  const product = getStarProduct();
  const { scrollToContact, scrollToProducts } = useScroll();

  if (!product) return null;

  return (
    <section className="star-product" aria-labelledby="star-product-title">
      <div className="star-product__inner">
        <div className="star-product__pack">
          <div className="star-product__pack-stage">
            <span className="star-product__pack-tab" aria-hidden />
            <img
              src={product.image}
              alt={`${SITE.name} ${product.name} namkeen packet`}
              className="star-product__pack-img"
            />
          </div>
        </div>
        <div className="star-product__copy">
          <p className="star-product__label">Current star product</p>
          <h2 id="star-product-title" className="star-product__title">
            {product.name}
            <span className="star-product__hindi">{product.hindiName}</span>
          </h2>
          <p className="star-product__desc">{product.description}</p>
          <ul className="star-product__highlights">
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="star-product__actions">
            <button type="button" className="star-product__btn-primary" onClick={scrollToContact}>
              Enquire to order
            </button>
            <button type="button" className="star-product__btn-secondary" onClick={scrollToProducts}>
              All packs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
