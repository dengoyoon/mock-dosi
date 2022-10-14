import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/InternalNavBar.scss";

function InternalNavBar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="active" to="/">
          <span>Home</span>
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="/adventure">
          <span>Adventure</span>
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="/membership">
          <span>Citizen Membership</span>
        </Link>
      </li>
      <li className="navbar__item">
        <Link>
          <span>Notice</span>
        </Link>
      </li>
      <li className="navbar__item">
        <Link>
          <span>Marketplace</span>
        </Link>
      </li>
    </ul>
  );
}

export default InternalNavBar;
