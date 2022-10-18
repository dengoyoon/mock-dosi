import React from "react";

import "../../stylesheets/AdventureCard.scss";

function AdventureCard({ imgUrl, head, small }) {
  return (
    <div className="adventure-card">
      <div className="overlay">
        <div className="adventure-card__header">
          <img src={imgUrl} />
        </div>
        <div className="adventure-card__body">
          <h5>
            {head}
            <small>{small}</small>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AdventureCard;
