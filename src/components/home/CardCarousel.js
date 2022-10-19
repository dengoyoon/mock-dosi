import React from "react";
import AdventureCard from "../adventure/AdventureCard";
import { IMG_LINK } from "../../img/link";

import "../../stylesheets/CardCarousel.scss";

function CardCarousel() {
  return (
    <div className="card-carousel">
      <div>
        <AdventureCard
          imgUrl={IMG_LINK.moonBird}
          head="Moonbirds #4486"
          small="1명 추첨"
        />
      </div>
    </div>
  );
}

export default CardCarousel;
