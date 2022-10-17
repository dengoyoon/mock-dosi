import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";
import HowToEnjoy from "./HowToEnjoy";
import WeeklyAdventure from "./WeeklyAdventure";
import Welcome from "./Welcome";

import "../../stylesheets/Home.scss";

function Home() {
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
