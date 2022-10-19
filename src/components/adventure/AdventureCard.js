import React from "react";

import "../../stylesheets/AdventureCard.scss";

function AdventureCard({ imgUrl, head, small, isVisibleBody }) {
  return (
    <div className="adventure-card">
      <div className="overlay">
        {isVisibleBody ? (
          <>
            <div className="adventure-card__adventure-header">
              <img src={imgUrl} />
            </div>
            <div className="adventure-card__body">
              <h5>
                {head}
                <small>{small}</small>
              </h5>
            </div>
          </>
        ) : (
          <>
            <div className="adventure-card__home-header">
              <img src={imgUrl} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdventureCard;
