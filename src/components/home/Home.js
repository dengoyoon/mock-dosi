import React from "react";
import FAQ from "./FAQ";
import HowToEnjoy from "./HowToEnjoy";
import WeeklyAdventure from "./WeeklyAdventure";
import Welcome from "./Welcome";
import { useSetRecoilState } from "recoil";
import { headerState } from "../../store";

import "../../stylesheets/Home.scss";

function Home() {
  const setHeaderState = useSetRecoilState(headerState);
  setHeaderState({ isDark: true });
  return (
    <div className="home">
      <Welcome />
      <WeeklyAdventure />
      <HowToEnjoy />
      <FAQ />
    </div>
  );
}

export default Home;
