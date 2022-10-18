import React from "react";

import "../../stylesheets/MembershipLevelCard.scss";

function MembershipLevelCard({ citizenImg, level, colorName, name }) {
  return (
    <div className="membership-level-card">
      <div className="membership-level-card__content">
        <img src={citizenImg} />
        <div className="membership-level-card__content__body">
          <div
            className={
              "membership-level-card__content__body__level " + colorName
            }
          >
            {level}
          </div>
          <div className="membership-level-card__content__body__name">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipLevelCard;
