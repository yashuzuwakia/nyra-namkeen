import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SITE } from "../constants/site";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <p className="topbar__promo">{SITE.tagline} · Premium mixture &amp; retail packs</p>
        <div className="topbar__links">
          <a href={`mailto:${SITE.email}`}>
            <FaEnvelope aria-hidden /> {SITE.email}
          </a>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
            <FaPhoneAlt aria-hidden /> {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
