import React from "react";
import CountdownCard from "./CountdownCard";

import "../../stylesheets/Countdown.scss";

function Countdown() {
  return (
    <div className="countdown">
      <CountdownCard number="04" label="Day" />
      <CountdownCard number="03" label="Hour" />
      <CountdownCard number="37" label="Minute" />
      <CountdownCard number="23" label="Second" />
    </div>
  );
}

export default Countdown;
