import React from "react";
import { NavLink } from "react-router-dom";

import "../../stylesheets/InternalNavBar.scss";

function InternalNavBar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink
          end
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/adventure"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Adventure</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/membership"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Citizen Membership</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/notice">
          <span>Notice</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/marketplace">
          <span>Marketplace</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default InternalNavBar;
