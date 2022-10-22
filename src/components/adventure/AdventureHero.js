import React, { useEffect, useRef } from "react";
import HeroSwitch from "./HeroSwitch";
import Countdown from "../countdown/Countdown";
import { IMG_LINK } from "../../img/link";
import AdventureCard from "./AdventureCard";
import { useRecoilState } from "recoil";
import { headerState } from "../../store";
import HeaderStickyPortal from "../header/HeaderStickyPortal";

import ic_coin from "../../img/ic_coin.png";

import "../../stylesheets/AdventureHero.scss";
import ParticipationButton from "./ParticipationButton";

function AdventureHero() {
  const adventureHeroElement = useRef(null);
  const [header, setHeaderState] = useRecoilState(headerState);

  // 잠깐 : 리액트 훅 순서대로 써야하는거 뭔말인지 물어보기
  useEffect(() => {
    if (!adventureHeroElement.current) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setHeaderState({ isDark: true });
      } else {
        setHeaderState({ isDark: false });
        <HeaderStickyPortal />;
      }
    });
    io.observe(adventureHeroElement.current);

    return () => {
      io.disconnect();
    };
  });

  return (
    <section className="adventure-hero">
      <div className="container flex justify-content-center">
        <HeroSwitch />
      </div>
      <div className="container" ref={adventureHeroElement}>
        <div className="adventure-hero__header">
          <h3 className="adventure-hero__header__title">Weekly Adventure</h3>
          <div className="adventure-hero__header__description">
            <p>Citizen 여러분들을 위해 준비된 보물을 찾아 모험을 떠나보세요!</p>
            <p>
              매주 전세계적으로 유명한 &apos;블루칩 NFT&apos;를 포함한 다양한
              NFT를 보상으로 에어드랍 받을 수 있는 새로운 DOSI
              Adventure&#40;도시 탐사&#41;가 열립니다.
            </p>
          </div>
          <div className="adventure-hero__header__schedule">
            <p>참여 기간 : 10.13 ~ 10.20 (GMT+9)</p>
            <p>당첨자 발표일 : 2022.10.27 (GMT+9)</p>
          </div>
        </div>
        <div className="adventure-hero__body">
          <Countdown />
          <ul className="adventure-hero__body__card-grid">
            <li>
              <AdventureCard
                imgUrl={IMG_LINK.moonBird}
                head="Moonbirds #4486"
                small="1명 추첨"
                isVisibleBody={true}
              />
            </li>
            <li>
              <AdventureCard
                imgUrl={IMG_LINK.meeBits}
                head="Meebits #15350"
                small="1명 추첨"
                isVisibleBody={true}
              />
            </li>
            <li>
              <AdventureCard
                imgUrl={IMG_LINK.cryptoAdz}
                head="Cryptoads #1347"
                small="1명 추첨"
                isVisibleBody={true}
              />
            </li>
            <li>
              <AdventureCard
                imgUrl={IMG_LINK.diaTv}
                head="DIA TV"
                small="25명 추첨"
                isVisibleBody={true}
              />
            </li>
            <li>
              <AdventureCard
                imgUrl={IMG_LINK.hellBound}
                head="Hellbound"
                small="50명 추첨"
                isVisibleBody={true}
              />
            </li>
            <li>
              <AdventureCard
                imgUrl={IMG_LINK.dosiCitizen}
                head="DOSI Citizen"
                small="30000명 추첨"
                isVisibleBody={true}
              />
            </li>
          </ul>
        </div>
        <div className="adventure-hero__footer">
          <ParticipationButton />
        </div>
      </div>
      {!header.isDark && <HeaderStickyPortal />}
    </section>
  );
}

export default AdventureHero;
