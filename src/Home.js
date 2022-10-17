import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./components/home/FAQ";
import HowToEnjoy from "./components/home/HowToEnjoy";
import WeeklyAdventure from "./components/home/WeeklyAdventure";
import Welcome from "./components/home/Welcome";

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
