import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSwitch from "../adventure/HeroSwitch";
import EventCard from "./EventCard";
import { useSetRecoilState } from "recoil";
import { headerState } from "../../store";

import ic_attendence from "../../img/ic_attendence.png";
import ic_sliced_three_men from "../../img/ic_sliced_three_men.png";

import "../../stylesheets/GiftBox.scss";

function GiftBox() {
  const setHeaderState = useSetRecoilState(headerState);

  useEffect(() => {
    setHeaderState({ isDark: false });
  });

  return (
    <section className="giftbox">
      <div className="container flex justify-content-center">
        <HeroSwitch />
      </div>
      <div className="container">
        <div className="giftbox__header">
          <h4>Gift Box</h4>
          <p>친구 초대, 출석 체크 등의 미션을 통해 DON을 모아보세요!</p>
        </div>
        <div className="giftbox__body">
          <Link>
            <div className="my-don">
              <span className="my-don__label">나의 DON</span>
              <svg
                className="my-don__coin"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.82707 4.74587L4.72977 3.52169L4.74307 1.57947L6.84036 2.80365L6.82707 4.74587ZM2.82957 12.7423L1 11.6744L1.01329 9.73258L1.01285 9.73232L1.02614 7.79245L3.12343 9.01663L3.11014 10.9561L3.11059 10.9564L3.10593 11.6374L4.9355 12.7053L4.93084 13.3864L6.76041 14.4544L6.74712 16.3966L4.64983 15.1724L4.65449 14.4913L2.82491 13.4234L2.82957 12.7423ZM4.97494 6.88132L2.87765 5.65713L2.89094 3.71491L4.98824 4.9391L4.97494 6.88132ZM1.02721 7.79245L3.12451 9.01664L3.1378 7.07442L1.0405 5.85023L1.02721 7.79245Z"
                  fill="#C39124"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3527 2.22444L10.5146 2.41755L10.5149 2.41772L8.6767 2.61085L6.95368 1.60513L8.67651 2.61095L6.84063 2.80382L4.74333 1.57963L6.57922 1.38651L6.57947 1.38666L8.41763 1.19327L8.41772 1.19333L10.2554 1L12.3527 2.22444ZM12.3394 4.16659L10.2421 2.94241L12.0803 2.74902L14.1776 3.97347L12.3394 4.16659ZM14.1643 5.91557L12.067 4.69139L13.9029 4.49826L16.0002 5.7227L14.1643 5.91557ZM4.99019 4.93914L2.8929 3.71496L4.73113 3.52157L6.82842 4.74602L4.99019 4.93914ZM1.04077 5.85028L3.13807 7.07446L4.97629 6.88134L2.879 5.65689L1.04077 5.85028Z"
                  fill="#ECB720"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3395 4.16648L12.3528 2.22437L10.5146 2.41749L8.67636 2.61088L6.84048 2.80375L6.82719 4.74597L8.66307 4.55284L10.5013 4.35971L12.3392 4.16662L12.3259 6.10874L14.1638 5.91565L14.1502 7.85771L14.1369 9.79758L14.1236 11.7397L12.2865 11.9328L12.2732 13.875L14.1114 13.6818L14.1247 11.7397L15.9598 11.5467L15.9731 9.60472L15.9864 7.66484L15.9996 5.72262L14.1642 5.91545L14.1774 3.97339L12.3395 4.16648ZM12.2596 15.8173L12.2729 13.8751L10.4346 14.0682L8.59641 14.2616L6.76055 14.4544L6.77385 12.5123L4.93562 12.7054L4.92233 14.6476L6.76053 14.4545L6.74724 16.3967L8.58312 16.2035L10.4214 16.0104L12.2596 15.8173ZM6.82658 4.74594L6.81329 6.68816L4.97506 6.88129L4.98835 4.93907L6.82658 4.74594ZM4.96222 8.82348L4.97552 6.88126L3.13729 7.07439L3.124 9.01661L3.1107 10.9565L3.09741 12.8987L4.93564 12.7053L4.94893 10.7634L4.96222 8.82348Z"
                  fill="#FFDB55"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3398 4.1665L12.3265 6.10872L14.1647 5.91534L14.1514 7.85756L14.1381 9.79743L14.1246 11.7396L12.2866 11.9328L12.2733 13.875L10.4351 14.0681L8.59685 14.2613L6.76097 14.4544L6.77426 12.5122L4.93604 12.7053L4.94933 10.7633L4.96262 8.82345L4.97591 6.88123L6.81414 6.68811L6.82743 4.74589L8.66331 4.55302L10.5015 4.35963L12.3398 4.1665Z"
                  fill="#ECB720"
                ></path>
              </svg>
              <span className="my-don__point">0</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
              >
                <path
                  d="M1 2L6.5 7.5L1 13"
                  stroke="black"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </Link>
          <ul className="giftbox__body__event-card-list">
            <li>
              <EventCard
                head="출석 체크하기"
                description="매일 매일 50DON 적립"
                icon={ic_attendence}
                buttonName="출석하기"
              />
            </li>
            <li>
              <EventCard
                head="친구 초대하기"
                description="친구 초대할 때마다 100DON 적립 초대한 친구에게 300DON 적립 최대 10명 초대 가능"
                icon={ic_sliced_three_men}
                buttonName="초대하기"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GiftBox;
