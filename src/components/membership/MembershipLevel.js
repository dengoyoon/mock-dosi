import React from "react";
import MembershipLevelCard from "./MemberShipLevelCard";

import ic_citizen_level1 from "../../img/ic_citizen_level1.png";
import ic_citizen_level2 from "../../img/ic_citizen_level2.png";
import ic_citizen_level3 from "../../img/ic_citizen_level3.png";
import ic_citizen_level4 from "../../img/ic_citizen_level4.png";

import "../../stylesheets/MembershipLevel.scss";

function MembershipLevel() {
  return (
    <section className="membership-level">
      <div className="container">
        <div className="membership-level__header">
          <h4>Citizen 멤버십 레벨</h4>
        </div>
        <div className="membership-level__body">
          <ul className="membership-level__body__card-list">
            <li>
              <MembershipLevelCard
                citizenImg={ic_citizen_level1}
                level="Level 1"
                colorName="sand"
                name="여행자"
              />
            </li>
            <li>
              <MembershipLevelCard
                citizenImg={ic_citizen_level2}
                level="Level 2"
                colorName="lavender"
                name="방문객"
              />
            </li>
            <li>
              <MembershipLevelCard
                citizenImg={ic_citizen_level3}
                level="Level 3"
                colorName="melon"
                name="거주자"
              />
            </li>
            <li>
              <MembershipLevelCard
                citizenImg={ic_citizen_level4}
                level="Level 4"
                colorName="sky"
                name="시민"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MembershipLevel;
