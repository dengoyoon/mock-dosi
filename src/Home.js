import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./components/FAQ";
import HowToEnjoy from "./components/HowToEnjoy";
import WeeklyAdventure from "./components/WeeklyAdventure";
import Welcome from "./components/Welcome";

import "./stylesheets/Home.scss";

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
