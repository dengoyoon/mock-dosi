import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/ExternalNavBar.scss";

function ExternalNavBar() {
  return (
    <ul className="navbar">
      <li>
        <Link>디코</Link>
      </li>
      <li>
        <Link>트위터</Link>
      </li>
      <li>
        <Link>브런치</Link>
      </li>
      <li>
        <Link>프로필</Link>
      </li>
      <li>
        <Link>지갑</Link>
      </li>
    </ul>
  );
}

export default ExternalNavBar;
