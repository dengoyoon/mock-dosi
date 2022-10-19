import React from "react";
import AdventureCard from "../adventure/AdventureCard";
import { IMG_LINK } from "../../img/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../../stylesheets/CardCarousel.scss";

function CardCarousel() {
  return (
    <div className="card-carousel">
      <Swiper
        spaceBetween={21}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
    </div>
  );
}

export default CardCarousel;
