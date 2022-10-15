import React from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/Welcome.scss";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__content">
        <h3>Welcome to Citizen World</h3>
        <p>DOSI Citizen이 되어 Citizen World를 즐겨보세요</p>
        <button type="button">Get Your Citizen NFT</button>
      </div>
    </section>
  );
}

export default Welcome;
