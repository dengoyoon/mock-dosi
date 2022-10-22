import React from "react";

import "../../stylesheets/CountdownCard.scss";

const getStringNumber = (number) => (number < 10 ? `0${number}` : `${number}`);

function CountdownCard({ number, label, isInHeader }) {
  return isInHeader ? (
    <div className="header-countdown__card">{getStringNumber(number)}</div>
  ) : (
    <div className="countdown__card">
      <div className="countdown__card__body">{getStringNumber(number)}</div>
      <div className="countdown__card__footer">{label}</div>
    </div>
  );
}

export default CountdownCard;
