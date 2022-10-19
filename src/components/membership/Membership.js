import React from "react";
import GetYourCitizen from "./GetYourCitizen";
import HowToLevelUp from "./HowToLevelUp";
import MembershipBenefit from "./MembershipBenefit";
import MembershipLevel from "./MembershipLevel";

function Membership() {
  return (
    <div className="membership">
      <GetYourCitizen />
      <MembershipLevel />
      <HowToLevelUp />
      <MembershipBenefit />
    </div>
  );
}

export default Membership;
