import React from "react";

import ic_get_your_citizen from "../../img/ic_get_your_citizen.png";

import "../../stylesheets/GetYourCitizen.scss";

function GetYourCitizen() {
  return (
    <section className="get-your-citizen">
      <div className="get-your-citizen__header">
        <img src={ic_get_your_citizen} />
      </div>
      <div className="get-your-citizen__body">
        <h4>Citizen 사이트에 가입하고 유니크한 Citizen NFT를 받아보세요</h4>
      </div>
      <div className="get-your-citizen__footer">
        <button type="button">Get Your Citizen NFT</button>
      </div>
    </section>
  );
}

export default GetYourCitizen;
