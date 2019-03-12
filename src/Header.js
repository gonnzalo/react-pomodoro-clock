import React from "react";
import PropTypes from "prop-types";

import "./header.css";

function Header(props) {
  const { settingToggle } = props;
  return (
    <div className="header-container">
      <header>
        <div>
          <h1 className="tittle">POMODORO TIMER</h1>
        </div>
        <nav className="nav-container">
          <button type="button" className="btns-nav">
            how to
          </button>
          <button type="button" className="btns-nav" onClick={settingToggle}>
            setting
          </button>
        </nav>
      </header>
    </div>
  );
}

Header.propTypes = {
  settingToggle: PropTypes.func.isRequired
};

export default Header;
