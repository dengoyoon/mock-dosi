import React from "react";
import ExternalNavBar from "./ExternalNavBar";
import InternalNavBar from "./InternalNavBar";

import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <div className="header-aside-left">
          <div>DOSI Citizen</div>
        </div>
        <nav className="header-body">
          <InternalNavBar />
        </nav>
        <nav className="header-aside-right">
          <ExternalNavBar />
        </nav>
      </div>
    </header>
  );
}

export default Header;
