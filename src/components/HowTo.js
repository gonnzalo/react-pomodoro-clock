import React from "react";
import PropTypes from "prop-types";
import "./howTo.css";

function HowTo(props) {
  const { howTo, howToToggle } = props;
  return (
    <div className={`howto-container ${howTo && "howto-modal"}`}>
      <input
        type="button"
        className="submit-close"
        name="submit-close"
        value="x"
        onClick={howToToggle}
      />
      <h3>Pomodoro Technique</h3>
      <p>There are six steps in the original technique:</p>
      <ol>
        <li>Decide on the task to be done.</li>
        <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
        <li>
          End work when the timer rings and put a checkmark on a piece of paper.
        </li>
        <li>
          If you have fewer than four checkmarks, take a short break (3–5
          minutes), then go to step 2.
        </li>
        <li>
          After four pomodoros, take a longer break (15–30 minutes), reset your
          checkmark count to zero, then go to step 1.
        </li>
      </ol>
    </div>
  );
}

HowTo.propTypes = {
  howTo: PropTypes.bool.isRequired,
  howToToggle: PropTypes.func.isRequired
};

export default HowTo;
