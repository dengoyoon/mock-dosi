import React from "react";

import ic_coin from "../../img/ic_coin.png";

import "../../stylesheets/ParticipationButton.scss";

const getButtonClassName = (isInHeader) =>
  isInHeader ? "header-btn-participation" : "btn-participation";

function ParticipationButton({ isInHeader }) {
  return (
    <button className={getButtonClassName(isInHeader)}>
      <div className={getButtonClassName(isInHeader) + "__content"}>
        <img src={ic_coin} />
        <span>100DON 내고 참여하기</span>
      </div>
    </button>
  );
}

export default ParticipationButton;
