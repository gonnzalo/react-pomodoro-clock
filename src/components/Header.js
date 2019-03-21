import React from "react";
import Settings from "@material-ui/icons/Settings";
import PropTypes from "prop-types";

import "./header.css";

function Header(props) {
  const { settingToggle, howToToggle } = props;
  return (
    <div className="header-container">
      <header>
        <div>
          <h1 className="tittle">POMODORO TIMER</h1>
        </div>
        <nav className="nav-container">
          <button type="button" className="btns-nav" onClick={howToToggle}>
            how to
          </button>
          <button type="button" className="btns-nav" onClick={settingToggle}>
            setting
          </button>
          <button
            type="button"
            className="btns-nav btns-mobile"
            onClick={settingToggle}
          >
            <Settings className="setting-icon" />
          </button>
        </nav>
      </header>
    </div>
  );
}

Header.propTypes = {
  settingToggle: PropTypes.func.isRequired,
  howToToggle: PropTypes.func.isRequired
};

export default Header;
