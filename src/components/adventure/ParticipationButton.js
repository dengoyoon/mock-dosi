import React from "react";

import ic_coin from "../../img/ic_coin.png";

import "../../stylesheets/ParticipationButton.scss";

function ParticipationButton() {
  return (
    <button className="btn-participation">
      <div className="btn-participation__content">
        <img src={ic_coin} />
        <span>100DON 내고 참여하기</span>
      </div>
    </button>
  );
}

export default ParticipationButton;
