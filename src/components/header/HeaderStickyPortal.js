import React from "react";
import ReactDOM from "react-dom";
import Countdown from "../countdown/Countdown";
import ParticipationButton from "../adventure/ParticipationButton";

import "../../stylesheets/HeaderStickyPortal.scss";

const HeaderStickyPortal = () =>
  ReactDOM.createPortal(
    <div className="header-sticky-portal">
      <div className="container flex align-items-center">
        <div className="header-sticky-portal__countdown">
          <h5>Adventure 종료까지 남은 시간</h5>
          <Countdown isInHeader={true} />
        </div>
        <ParticipationButton isInHeader={true} />
      </div>
    </div>,
    document.querySelector("#header-sticky-portal")
  );

export default HeaderStickyPortal;
