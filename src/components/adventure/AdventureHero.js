import React from "react";
import { Link } from "react-router-dom";
import HeroSwitch from "./HeroSwitch";

import "../../stylesheets/AdventureHero.scss";

function AdventureHero() {
  return (
    <section className="adventure-hero">
      <div className="container">
        <HeroSwitch currentPage="adventure" />
      </div>
      <div className="container"></div>
    </section>
  );
}

export default AdventureHero;
