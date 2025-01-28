import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import productImg from "../assets/images/mixture.png";
import madrasi from "../assets/images/madrasi.png";
import fire from "../assets/images/fire.png";

import "./Products.css";

// Component for 3D Model
const Model = () => {
  const { scene } = useGLTF("/assets/models/Nyra Namkeen.glb"); // Correct path
  return <primitive object={scene} scale={2} />;
};

// Products array
const products = [
  {
    id: 1,
    name: "Classic Mixture",
    description:
      "Our signature namkeen blend crafted with the finest ingredients to deliver a perfect balance of spices and crunch. Ideal for every occasion, this timeless mixture is a treat for your taste buds.",
    price: "₹100",
    image: productImg,
    hasModel: true, // Indicates if the product has a 3D model
  },
  {
    id: 2,
    name: "The Fiery One",
    description:
      "Spicy and bold, this namkeen is perfect for those who crave an extra kick in every bite. Made with high-quality ingredients to ensure the perfect blend of flavor and heat.",
    price: "₹120",
    image: fire,
    hasModel: false, // No 3D model
  },
  {
    id: 3,
    name: "The Flavour of Madras",
    description:
      "Experience the authentic taste of South India with our Madras-inspired namkeen. Bursting with flavors of curry leaves, mustard seeds, and traditional spices.",
    price: "₹110",
    image: madrasi,
    hasModel: false, // No 3D model
  },
];

export default function Products() {
  return (
    <>
      {products.map((product) => (
        <div className="single-product-container" key={product.id}>
          <h1 className="product-heading">{product.name}</h1>
          <div className="product-details">
            {/* Left Section: Image */}
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>

            {/* Center Section: Product Information */}
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>

            {/* Right Section: 3D Model (conditionally rendered) */}
            {product.hasModel && (
              <div className="product-model-container">
                <Canvas>
                  <ambientLight intensity={3} />
                  <directionalLight position={[5, 5, 5]} />
                  <Model />
                  <OrbitControls />
                </Canvas>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
