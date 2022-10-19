import React from "react";

import ic_gift_nft from "../../img/ic_gift_nft.png";
import ic_big_coin from "../../img/ic_big_coin.png";

import "../../stylesheets/MembershipBenefit.scss";

function MembershipBenefit() {
  return (
    <section className="membership-benefit">
      <div className="container">
        <div className="membership-benefit__header">
          <h4>Citizen Membership 혜택</h4>
        </div>
        <div className="membership-benefit__body">
          <ul className="membership-benefit__body__benefit-list">
            <li>
              <div className="benefit-card">
                <div className="benefit-card__content">
                  <h5>경품 NFT 받기</h5>
                  <p>
                    Citizen 구성원만이 Adventure에 참여하여 경품 NFT를 획득할 수
                    있어요.
                  </p>
                </div>
                <img src={ic_gift_nft} />
              </div>
            </li>
            <li>
              <div className="benefit-card">
                <div className="benefit-card__content">
                  <h5>더 많은 DON 적립하기</h5>
                  <p>
                    더 높은 레벨의 Citizen을 가지고 있을수록, 더 많은 DON을
                    적립받을 수 있어요.
                  </p>
                </div>
                <img src={ic_big_coin} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MembershipBenefit;
