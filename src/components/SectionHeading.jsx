import React from "react";
import "./SectionHeading.css";

export default function SectionHeading({ title, subtitle, id }) {
  return (
    <header className="section-heading" id={id}>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  );
}
