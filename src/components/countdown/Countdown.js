import React, { useState } from "react";
import CountdownCard from "./CountdownCard";
import { go } from "../../utilFunc";

import "../../stylesheets/Countdown.scss";

const endDate = new Date("2022-10-27");

const getToday = () => new Date();

const getRemainerPeriod = (endDate, today) =>
  endDate.getTime() - today.getTime();

const getObjectRemainderPeriod = (time) => {
  const day = parseInt(time / (1000 * 60 * 60 * 24));
  time -= day * (1000 * 60 * 60 * 24);
  const hour = parseInt(time / (1000 * 60 * 60));
  time -= hour * (1000 * 60 * 60);
  const minute = parseInt(time / (1000 * 60));
  time -= minute * (1000 * 60);
  const second = parseInt(time / 1000);

  return { day, hour, minute, second };
};

const initialRemainderPeriod = go(
  getToday(),
  (today) => getRemainerPeriod(endDate, today),
  getObjectRemainderPeriod
);

function Countdown() {
  const [remainderPeriod, setRemainderPeriod] = useState(
    initialRemainderPeriod
  );
  setInterval(
    () =>
      go(
        getToday(),
        (today) => getRemainerPeriod(endDate, today),
        getObjectRemainderPeriod,
        setRemainderPeriod
      ),
    1000
  );
  /*
  1. 이번 어드벤쳐의 마지막 날짜 객체를 구한다
  2. 현재 날짜 객체를 구한다
  3. 둘을 뺀 것을 day - hour - minute - second 를 프로퍼티로 하는 객체로 만든다
  4. 해당 객체를 useState의 초기 값으로 넣는다
  5. state값으로 number에 넣어 렌더링을 한다.
  6. 1초마다 2-3번을 반복하고 setState에 업데이트 한다.
  */

  return (
    <div className="countdown">
      <CountdownCard number={remainderPeriod.day} label="Day" />
      <CountdownCard number={remainderPeriod.hour} label="Hour" />
      <CountdownCard number={remainderPeriod.minute} label="Minute" />
      <CountdownCard number={remainderPeriod.second} label="Second" />
    </div>
  );
}

export default Countdown;
