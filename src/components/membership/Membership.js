import React from "react";
import GetYourCitizen from "./GetYourCitizen";
import HowToLevelUp from "./HowToLevelUp";
import MembershipBenefit from "./MembershipBenefit";
import MembershipLevel from "./MembershipLevel";
import { useSetRecoilState } from "recoil";
import { headerState } from "../../store";

function Membership() {
  const setHeaderState = useSetRecoilState(headerState);
  setHeaderState({ isDark: false });
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
