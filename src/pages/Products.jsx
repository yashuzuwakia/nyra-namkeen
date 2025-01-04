import React from "react";
import "./Products.css";
import productImg from "../assets/images/packet-design.png"

const product = {
  name: "Classic Mixture",
  description:
    "Our signature namkeen blend crafted with the finest ingredients to deliver a perfect balance of spices and crunch. Ideal for every occasion, this timeless mixture is a treat for your taste buds.",
  price: "₹100",
  image: "https://via.placeholder.com/300", // Replace with the actual product image URL
};

export default function Products() {
  return (
    <div className="single-product-container">
      <h1 className="product-heading">Our Signature Product</h1>
      <div className="product-details">
        <img
          src={productImg}
          alt={"nyra namkeen"}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          {/*<button className="buy-now-button">Buy Now</button>*/}
        </div>
      </div>
    </div>
  );
}
