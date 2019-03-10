import React from "react";
import PropTypes from "prop-types";
import "./options.css";

function Options(props) {
  const { handleOptions, scream, isLooping } = props;
  return (
    <div>
      <input
        type="button"
        value="Pomodoro"
        onClick={handleOptions}
        className={
          (scream === "pomodoro" && "active") ||
          (scream === "pomodoro-loop" && "active ")
        }
      />
      <input
        type="button"
        value="Short Break"
        onClick={handleOptions}
        className={scream === "short-break" && "active"}
      />
      <input
        type="button"
        value="Long Break"
        onClick={handleOptions}
        className={scream === "long-break" && "active"}
      />
      <input
        type="button"
        value="Pomodoro Loop"
        onClick={handleOptions}
        className={
          (scream === "pomodoro-loop" && "active ") || (isLooping && "active")
        }
      />
    </div>
  );
}

Options.propTypes = {
  handleOptions: PropTypes.func.isRequired,
  scream: PropTypes.string.isRequired,
  isLooping: PropTypes.bool.isRequired
};

export default Options;
