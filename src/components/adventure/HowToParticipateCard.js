import React from "react";

import "../../stylesheets/HowToParticipateCard.scss";

function HowToParticipateCard({ head, description, icon }) {
  return (
    <div className="how-to-participate-card">
      <div className="how-to-participate-card__content">
        <h5 className="how-to-participate-card__content__head">{head}</h5>
        <p className="how-to-participate-card__content__description">
          {description}
        </p>
      </div>
      <img className="how-to-participate-card__icon" src={icon} />
    </div>
  );
}

export default HowToParticipateCard;
