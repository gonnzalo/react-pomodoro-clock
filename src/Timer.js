import React from "react";
import PropTypes from "prop-types";

function Timer(props) {
  const { counter } = props;
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

Timer.propTypes = {
  counter: PropTypes.string.isRequired
};

export default Timer;
