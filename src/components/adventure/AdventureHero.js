import React, { useState, useEffect, useRef } from "react";
import HeroSwitch from "./HeroSwitch";
import Countdown from "../countdown/Countdown";
import AdventureCard from "./AdventureCard";
import { useRecoilState } from "recoil";
import { headerState } from "../../store";
import HeaderStickyPortal from "../header/HeaderStickyPortal";
import { go } from "../../utilFunc";
import { getAdventureNFTs } from "../../api";
import ParticipationButton from "./ParticipationButton";

import "../../stylesheets/AdventureHero.scss";

const convertNftsToCards = (nfts) =>
  nfts.map(
    (nft) =>
      new Object({
        ...nft,
        isVisibleBody: true,
      })
  );

const makeAdventureCards = (cards) =>
  cards.map((card, index) => (
    <li key={index}>
      <AdventureCard
        imgUrl={card.imgUrl}
        head={card.head}
        small={card.small}
        isVisibleBody={card.isVisibleBody}
      />
    </li>
  ));

function AdventureHero() {
  const adventureHeroElement = useRef(null);
  const [header, setHeaderState] = useRecoilState(headerState);
  const [cards, setCards] = useState([{}, {}, {}, {}, {}, {}]);

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

  useEffect(() => {
    getAdventureNFTs().then((nfts) => {
      go(nfts, convertNftsToCards, (cards) => setCards([...cards]));
    });
  }, []);

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
            {makeAdventureCards(cards)}
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
