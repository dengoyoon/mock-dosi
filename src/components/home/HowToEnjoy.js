import React from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/HowToEnjoy.scss";
import ic_crown_man from "../../img/ic_crown_man.png";
import ic_giftbox from "../../img/ic_giftbox.png";
import ic_rocket from "../../img/ic_rocket.png";

function HowToEnjoy() {
  return (
    <div className="how-to-enjoy">
      <div className="how-to-enjoy__header">
        <h4>Citizen World를 즐기는 방법</h4>
      </div>
      <div className="how-to-enjoy__body">
        <ul className="how-to-enjoy__body__list">
          <li>
            <Link to="/membership">
              <div className="card">
                <img className="card__image" src={ic_crown_man} />
                <h5 className="card__header">Citizen 멤버쉽 참여</h5>
                <p className="card__description">
                  Citizen 스토어에 가입하고 유니크한 Citizen NFT를 받아보세요
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/adventure/giftbox">
              <div className="card">
                <img className="card__image" src={ic_giftbox} />
                <h5 className="card__header">Citizen 혜택 받기</h5>
                <p className="card__description">
                  DON을 모으고, Adventure에 참여할 기회를 받아보세요
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/adventure">
              <div className="card">
                <img className="card__image" src={ic_rocket} />
                <h5 className="card__header">Adventure 경품 응모</h5>
                <p className="card__description">
                  Adventure에 참여하면 블루칩 NFT를 경품으로 받을 수 있어요
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HowToEnjoy;
