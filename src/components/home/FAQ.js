import React from "react";
import FAQCard from "./FAQCard";

import "../../stylesheets/FAQ.scss";

function FAQ() {
  return (
    <div className="faq">
      <div className="faq__header">
        <h4>자주 묻는 질문</h4>
      </div>
      <div className="faq__body">
        <ul className="faq__body__list">
          <li>
            <FAQCard
              title="DOSI Citizen이란 무엇인가요?"
              description="DOSI Citizen은 DOSI 만의 멤버십 프로그램으로, DOSI Wallet으로 DOSI에 가입한 누구든 멤버십 프로그램에 참여할 수 있습니다. Wallet 가입 완료 후 유니크한 Citizen 프로필 NFT를 에어드랍받고, DOSI Citizen만을 위해 준비된 여러 혜택을 즐겨보세요!"
            />
          </li>
          <li>
            <FAQCard
              title="Adventure란 무엇인가요?"
              description="DOSI에 가입하고 DOSI Citizen이 되면 누구나 참여할 수 있는 이벤트입니다. 매주 다양한 블루칩 NFT가 경품으로 제공되고, 참여 횟수가 많아질수록 당첨 확률이 높아집니다. SMS 인증을 완료한 후에 참여할 수 있어요."
            />
          </li>
          <li>
            <FAQCard
              title="Adventure에 당첨되고 싶습니다. 당첨 확률을 높이기 위해서는 어떻게 해야 할까요?"
              description="Adventure에 여러 번 참여할수록 당첨 확률이 높아집니다. 1회 100DON, 2회 200DON, 3회 300DON, 4회 400DON, 5회 500DON의 참여 비용이 필요합니다. 매주 진행되는 Adventure에 여러 번 참여해서 당첨확률을 높이고, 경품 NFT를 받아보세요!"
            />
          </li>
          <li>
            <FAQCard
              title="DON이란 무엇인가요? 어떻게 모을 수 있나요?"
              description="DON은 Citizen에 가입하여 적립, 사용할 수 있는 DOSI 멤버십 포인트입니다. 친구를 초대하거나 매일 출석체크를 해서 DON을 적립할 수 있어요."
            />
          </li>
          <li>
            <FAQCard
              title="더 높은 레벨의 Citizen NFT를 갖고 싶습니다. 구매할 수 있나요?"
              description="총 4개 레벨의 Citizen NFT를 거래할 수 있는 마켓 플레이스가 오픈될 예정입니다. 또한 보유 중인 Citizen NFT를 모으고 DON을 사용해서 레벨업할 수 있도록 준비 중이니 많은 기대 부탁드립니다."
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
