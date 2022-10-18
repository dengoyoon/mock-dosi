import React from "react";

import ic_three_men from "../../img/ic_three_men.png";
import ic_big_coin from "../../img/ic_big_coin.png";
import ic_plus from "../../img/ic_plus.png";

import "../../stylesheets/HowToLevelUp.scss";

function HowToLevelUp() {
  return (
    <section className="how-to-level-up">
      <div className="container">
        <div className="how-to-level-up__header">
          <h4>Citizen을 레벨업하려면?</h4>
          <p className="how-to-level-up__header__requirement">
            레벨업하려면 Citizen NFT와 DON이 필요해요
          </p>
          <p className="how-to-level-up__header__coming-soon">
            * 레벨업 오픈 예정
          </p>
        </div>
        <div className="how-to-level-up__body">
          <div className="how-to-level-up__body__item">
            <div className="how-to-level-up__body__item__img-box">
              <img src={ic_three_men} />
            </div>
            <p className="how-to-level-up__body__item__description">
              Citizen NFT를 모아요
            </p>
          </div>
          <div className="how-to-level-up__body__plus">
            <div className="how-to-level-up__body__plus__frame">
              <img src={ic_plus} />
            </div>
          </div>
          <div className="how-to-level-up__body__item">
            <div className="how-to-level-up__body__item__img-box">
              <img src={ic_big_coin} />
            </div>
            <p className="how-to-level-up__body__item__description">
              DON을 적립해요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToLevelUp;
