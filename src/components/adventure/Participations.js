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
        <div className="participations__card"></div>
      </div>
    </section>
  );
}

export default Participations;
