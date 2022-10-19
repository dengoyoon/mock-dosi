import React, { useState } from "react";
import AdventureCard from "../adventure/AdventureCard";
import { IMG_LINK } from "../../img/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "../../stylesheets/CardCarousel.scss";

function CardCarousel() {
  const [swiper, setSwiper] = useState({});
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return `<span class="${className}"></span>`;
    },
  };
  return (
    <div className="card-carousel">
      <Swiper
        modules={[Pagination]}
        spaceBetween={21}
        slidesPerView={3}
        loop={true}
        onInit={(ev) => {
          setSwiper(ev);
        }}
        pagination={pagination}
      >
        <SwiperSlide>
          <AdventureCard
            imgUrl={IMG_LINK.moonBird}
            head="Moonbirds #4486"
            small="1명 추첨"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdventureCard
            imgUrl={IMG_LINK.meeBits}
            head="Meebits #15350"
            small="1명 추첨"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdventureCard
            imgUrl={IMG_LINK.cryptoAdz}
            head="Cryptoads #1347"
            small="1명 추첨"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdventureCard
            imgUrl={IMG_LINK.diaTv}
            head="DIA TV"
            small="25명 추첨"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdventureCard
            imgUrl={IMG_LINK.hellBound}
            head="Hellbound"
            small="50명 추첨"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdventureCard
            imgUrl={IMG_LINK.dosiCitizen}
            head="DOSI Citizen"
            small="30000명 추첨"
          />
        </SwiperSlide>
      </Swiper>
      <button
        className="swiper-button-prev"
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 12 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4151 8.58763C11.7901 8.96268 12.0007 9.4713 12.0007 10.0016C12.0007 10.532 11.7901 11.0406 11.4151 11.4156L3.35715 19.4716C3.16962 19.6591 2.91531 19.7644 2.65015 19.7644C2.38498 19.7644 2.13067 19.6591 1.94315 19.4716L1.23615 18.7646C1.04867 18.5771 0.943359 18.3228 0.943359 18.0576C0.943359 17.7925 1.04867 17.5382 1.23615 17.3506L8.58615 9.99963L1.23615 2.64963C1.04867 2.4621 0.943359 2.20779 0.943359 1.94263C0.943359 1.67746 1.04867 1.42315 1.23615 1.23563L1.94315 0.528625C2.13067 0.341154 2.38498 0.23584 2.65015 0.23584C2.91531 0.23584 3.16962 0.341154 3.35715 0.528625L11.4151 8.58763Z"
            fill="black"
          ></path>
        </svg>
      </button>
      <button
        className="swiper-button-next"
        type="button"
        onClick={() => swiper.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 12 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4151 8.58763C11.7901 8.96268 12.0007 9.4713 12.0007 10.0016C12.0007 10.532 11.7901 11.0406 11.4151 11.4156L3.35715 19.4716C3.16962 19.6591 2.91531 19.7644 2.65015 19.7644C2.38498 19.7644 2.13067 19.6591 1.94315 19.4716L1.23615 18.7646C1.04867 18.5771 0.943359 18.3228 0.943359 18.0576C0.943359 17.7925 1.04867 17.5382 1.23615 17.3506L8.58615 9.99963L1.23615 2.64963C1.04867 2.4621 0.943359 2.20779 0.943359 1.94263C0.943359 1.67746 1.04867 1.42315 1.23615 1.23563L1.94315 0.528625C2.13067 0.341154 2.38498 0.23584 2.65015 0.23584C2.91531 0.23584 3.16962 0.341154 3.35715 0.528625L11.4151 8.58763Z"
            fill="black"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CardCarousel;
