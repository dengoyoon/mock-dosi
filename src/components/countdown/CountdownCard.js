import React from "react";

import "../../stylesheets/CountdownCard.scss";

function CountdownCard({ number, label }) {
  return (
    <div className="countdown__card">
      <div className="countdown__card__body">{number}</div>
      <div className="countdown__card__footer">{label}</div>
    </div>
  );
}

export default CountdownCard;
