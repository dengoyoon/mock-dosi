import React from "react";
import { NavLink } from "react-router-dom";

import "../../stylesheets/HeroSwitch.scss";

function HeroSwitch() {
  return (
    <ul className="hero-switch">
      <li>
        <NavLink
          to="/adventure"
          end
          className={({ isActive }) =>
            isActive ? "on-adventure" : "off-adventure"
          }
        >
          Adventure
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/adventure/giftbox"
          className={({ isActive }) =>
            isActive ? "on-giftbox" : "off-giftbox"
          }
        >
          Gift Box
        </NavLink>
      </li>
    </ul>
  );
}

export default HeroSwitch;
