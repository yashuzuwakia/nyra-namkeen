import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Products.css";
import productImg from "../assets/images/packet.png";

const Model = () => {
  const { scene } = useGLTF("/assets/models/Nyra Namkeen.glb"); // Correct path
  return <primitive object={scene} scale={2} />;
};

const product = {
  name: "Classic Mixture",
  description:
    "Our signature namkeen blend crafted with the finest ingredients to deliver a perfect balance of spices and crunch. Ideal for every occasion, this timeless mixture is a treat for your taste buds.",
  price: "₹100",
};

export default function Products() {
  return (
    <div className="single-product-container">
      <h1 className="product-heading">Our Signature Product</h1>
      <div className="product-details">
        {/* Left Section: Image */}
        <div className="product-image-container">
          <img
            src={productImg}
            alt="Nyra Namkeen"
            className="product-image"
          />
        </div>

        {/* Center Section: Product Information */}
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
        </div>

        {/* Right Section: 3D Model */}
        <div className="product-model-container">
          <Canvas>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
