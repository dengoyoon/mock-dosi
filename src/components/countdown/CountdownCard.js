import React from "react";

import "../../stylesheets/CountdownCard.scss";

const getStringNumber = (number) => (number < 10 ? `0${number}` : `${number}`);

function CountdownCard({ number, label }) {
  return (
    <div className="countdown__card">
      <div className="countdown__card__body">{getStringNumber(number)}</div>
      <div className="countdown__card__footer">{label}</div>
    </div>
  );
}

export default CountdownCard;
