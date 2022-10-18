import React from "react";
import { go } from "../../utilFunc";

import "../../stylesheets/Participations.scss";

const attachZeroToStringNumber = (stringNumber) =>
  "0".repeat(7 - stringNumber.length) + stringNumber;

const splitNumber = (attachedStringNumber) => attachedStringNumber.split("");

const mapCardList = (splitedStringNumberArray) =>
  splitedStringNumberArray.map((stringNumber, index) => {
    return <li key={index}>{stringNumber}</li>;
  });

const makeParticipateCardList = (paricipateNumber) =>
  go(
    String(paricipateNumber),
    attachZeroToStringNumber,
    splitNumber,
    mapCardList
  );

function Participations() {
  const tempParicipateNumber = 19275;
  return (
    <section className="participations">
      <div className="container">
        <div className="participations__card">
          <div className="container">
            <div className="adventure-overall-count">
              <div className="adventure-overall-count__header">
                <h5>이번주 누적 참여 횟수</h5>
              </div>
              <ul className="adventure-overall-count__body">
                {makeParticipateCardList(tempParicipateNumber)}
              </ul>
            </div>
          </div>
        </div>
        <div className="participations__card">
          <div className="container">
            <div className="adventure-progress">
              <div className="adventure-progress__header">
                <h5>나의 이번주 참여 횟수</h5>
                <p>Adventure는 최대 5번 참여할 수 있습니다.</p>
                <p>참여 횟수가 많아질수록 당첨 확률이</p>
                <p>높아집니다.</p>
              </div>
              <div className="adventure-progress__body"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Participations;
