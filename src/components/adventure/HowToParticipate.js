import React from "react";
import HowToParticipateCard from "./HowToParticipateCard";

import ic_participate_step_one from "../../img/ic_participate_step_one.png";
import ic_participate_step_two from "../../img/ic_participate_step_two.png";
import ic_participate_step_three from "../../img/ic_participate_step_three.png";
import ic_participate_step_four from "../../img/ic_participate_step_four.png";

import "../../stylesheets/HowToParticipate.scss";

function HowToParticipate() {
  return (
    <section className="how-to-participate">
      <div className="container">
        <div className="how-to-participate__header">
          <h4>참여 방법</h4>
        </div>
        <div className="how-to-participate__body">
          <ul className="how-to-participate__body__card-list">
            <li>
              <HowToParticipateCard
                head="1단계"
                description="DOSI Wallet에 가입합니다."
                icon={ic_participate_step_one}
              />
            </li>
            <li>
              <HowToParticipateCard
                head="2단계"
                description="가입한 Wallet을 DOSI Citizen 사이트에 연동합니다."
                icon={ic_participate_step_two}
              />
            </li>
            <li>
              <HowToParticipateCard
                head="3단계"
                description="DOSI Wallet에서 SMS 인증을 합니다."
                icon={ic_participate_step_three}
              />
            </li>
            <li>
              <HowToParticipateCard
                head="4단계"
                description="참여 비용 DON을 사용하여 Adventure에 참여합니다. (매주 1인당 최대 5회 참여 가능)"
                icon={ic_participate_step_four}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowToParticipate;
