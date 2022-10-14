import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/ExternalNavBar.scss";

function ExternalNavBar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link>디코</Link>
      </li>
      <li className="navbar__item">
        <Link>트위터</Link>
      </li>
      <li className="navbar__item">
        <Link>브런치</Link>
      </li>
      <li className="navbar__item">
        <Link>프로필</Link>
      </li>
      <li className="navbar__item">
        <Link>지갑</Link>
      </li>
    </ul>
  );
}

export default ExternalNavBar;
