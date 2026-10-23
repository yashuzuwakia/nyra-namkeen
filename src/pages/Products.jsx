import React, { useMemo, useState } from "react";
import { products, STAR_PRODUCT_ID } from "../data/products";
import ProductCard from "../components/ProductCard";
import CategoryStrip from "../components/CategoryStrip";
import StarProduct from "../components/StarProduct";
import { useScroll } from "../context/ScrollContext";
import "./Products.css";

export default function Products() {
  const { refs } = useScroll();
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.id !== STAR_PRODUCT_ID);
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    return list;
  }, [category]);

  return (
    <>
      <StarProduct />
      <CategoryStrip activeCategory={category} onSelect={setCategory} />
      <section
        className="shop"
        ref={refs.productsRef}
        id="products"
        aria-labelledby="shop-title"
      >
        <div className="shop__inner">
          <header className="shop__header">
            <p className="shop__eyebrow">Retail packs</p>
            <h2 id="shop-title" className="shop__title">Namkeen packets</h2>
            <p className="shop__subtitle">
              Pouch-style packs as sold in store — mixture is our current star
              product. Enquire for distribution and bulk orders.
            </p>
          </header>
          <div className="shop__grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
