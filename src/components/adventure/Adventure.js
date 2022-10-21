import React from "react";
import AdventureHero from "./AdventureHero";
import HowToParticipate from "./HowToParticipate";
import Participations from "./Participations";
import { useSetRecoilState } from "recoil";
import { headerState } from "../../store";

function Adventure() {
  const setHeaderState = useSetRecoilState(headerState);
  setHeaderState({ isDark: true });
  return (
    <div className="adventure">
      <AdventureHero />
      <Participations />
      <HowToParticipate />
    </div>
  );
}

export default Adventure;
