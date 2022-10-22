import React from "react";
import AdventureHero from "./AdventureHero";
import HowToParticipate from "./HowToParticipate";
import Participations from "./Participations";

function Adventure() {
  return (
    <div className="adventure">
      <AdventureHero />
      <Participations />
      <HowToParticipate />
    </div>
  );
}

export default Adventure;
