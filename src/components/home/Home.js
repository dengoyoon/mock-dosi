import React, { useEffect, useRef } from "react";
import FAQ from "./FAQ";
import HowToEnjoy from "./HowToEnjoy";
import WeeklyAdventure from "./WeeklyAdventure";
import Welcome from "./Welcome";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { headerState, userProfileState } from "../../store";

import "../../stylesheets/Home.scss";

function Home() {
  const homeElement = useRef(null);
  const setHeaderState = useSetRecoilState(headerState);
  const userProfile = useRecoilValue(userProfileState);

  useEffect(() => {
    if (!homeElement.current) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setHeaderState({ isDark: true });
      } else {
        setHeaderState({ isDark: false });
      }
    });
    io.observe(homeElement.current);

    return () => {
      io.disconnect();
    };
  });

  return (
    <div className="home">
      <div ref={homeElement}>
        {userProfile.isLogin ? <div>Login</div> : <Welcome />}
        <WeeklyAdventure />
      </div>
      <HowToEnjoy />
      <FAQ />
    </div>
  );
}

export default Home;
