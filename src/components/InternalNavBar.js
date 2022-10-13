import React from "react";
import { Link } from "react-router-dom";

function InternalNavBar() {
  return (
    <ul className="navbar">
      <li>
        <Link>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link>
          <span>Adventure</span>
        </Link>
      </li>
      <li>
        <Link>
          <span>Citizen Membership</span>
        </Link>
      </li>
      <li>
        <Link>
          <span>Notice</span>
        </Link>
      </li>
      <li>
        <Link>
          <span>Marketplace</span>
        </Link>
      </li>
    </ul>
  );
}

export default InternalNavBar;
