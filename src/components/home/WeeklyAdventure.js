import React from "react";
import { Link } from "react-router-dom";
import Countdown from "../Countdown";

import "../../stylesheets/WeeklyAdventure.scss";

function WeeklyAdventure() {
  return (
    <section className="weekly-adventure">
      <div className="weekly-adventure__header">
        <h4>Weekly Adventure</h4>
        <p>Citizen Member를 위해 준비된 보물을 찾아 모험을 떠나보세요!</p>
        <p>
          매주&quot;블루칩 NFT&quot;를 리워드로 Airdrop 받을 수 있는
          새로운Adventure가 열립니다
        </p>
      </div>
      <div className="weekly-adventure__body">
        <Countdown />
        <div className="weekly-adventure__body__carousel">Carousel</div>
      </div>
      <div className="weekly-adventure__footer">
        <Link to="/adventure">
          <button type="button">Get Treasure</button>
        </Link>
      </div>
    </section>
  );
}

export default WeeklyAdventure;
