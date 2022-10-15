import React from "react";

import "../stylesheets/Countdown.scss";

function Countdown() {
  return (
    <div className="countdown">
      <div className="countdown__card">
        <div className="countdown__card__body">04</div>
        <div className="countdown__card__footer">Day</div>
      </div>
      <div className="countdown__card">
        <div className="countdown__card__body">03</div>
        <div className="countdown__card__footer">Hour</div>
      </div>
      <div className="countdown__card">
        <div className="countdown__card__body">37</div>
        <div className="countdown__card__footer">Minute</div>
      </div>
      <div className="countdown__card">
        <div className="countdown__card__body">23</div>
        <div className="countdown__card__footer">Second</div>
      </div>
    </div>
  );
}

export default Countdown;
