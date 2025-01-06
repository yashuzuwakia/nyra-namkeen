import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Products.css";
import productImg from "../assets/images/packet-design.png";

const Model = () => {
  const { scene } = useGLTF("/assets/models/nyra.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true; // Enable casting shadows
      child.receiveShadow = true; // Enable receiving shadows
    }
  });

  return <primitive object={scene} scale={1} />;
};


export default function Products() {
  return (
    <div className="single-product-container">
      <h1 className="product-heading">Our Signature Product</h1>
      <div className="product-details">
        <div className="product-image-container">
          <img src={productImg} alt="Nyra Namkeen" className="product-image" />
        </div>
        <div className="product-info">
          <h2 className="product-name">Classic Mixture</h2>
          <p className="product-description">
            Our signature namkeen blend crafted with the finest ingredients to
            deliver a perfect balance of spices and crunch. Ideal for every
            occasion, this timeless mixture is a treat for your taste buds.
          </p>
          <p className="product-price">₹100</p>
        </div>
        <div className="product-model-container">
          <Canvas shadows>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[5, 5, 5]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={10}
              shadow-camera-left={-5}
              shadow-camera-right={5}
              shadow-camera-top={5}
              shadow-camera-bottom={-5}
            />
            <Model />
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -2, 0]}
            >
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color="#e0e0e0" roughness={0.8} metalness={0} />

            </mesh>
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
