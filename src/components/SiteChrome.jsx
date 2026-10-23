import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import "./SiteChrome.css";

export default function SiteChrome() {
  return (
    <div className="site-chrome">
      <TopBar />
      <Header />
    </div>
  );
}
