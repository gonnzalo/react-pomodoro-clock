import React from "react";
import PropTypes from "prop-types";

import "./timer.css";

function Timer(props) {
  const { counter } = props;
  return (
    <div>
      <h1 className="time-counter">{counter}</h1>
    </div>
  );
}

Timer.propTypes = {
  counter: PropTypes.string.isRequired
};

export default Timer;
