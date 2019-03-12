import React from "react";
import "./howTo.css";

function HowTo(props) {
  const { showSetting, howToToggle } = props;
  return (
    <div className={`howto-container ${showSetting && "howto-modal"}`}>
      <input
        type="button"
        className="submit-close"
        name="submit-close"
        value="x"
        onClick={howToToggle}
      />
      <h4>Pomodoro Technique</h4>
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

export default HowTo;
