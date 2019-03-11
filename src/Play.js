import React from "react";
import PropTypes from "prop-types";
import Pause from "@material-ui/icons/Pause";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Stop from "@material-ui/icons/Stop";

import "./play.css";

function Play(props) {
  const { handlePlay } = props;
  return (
    <div>
      <button
        type="button"
        value="stop"
        onClick={handlePlay}
        className="playBtns"
      >
        <Pause className="icons" />
      </button>
      <button
        type="button"
        value="play"
        onClick={handlePlay}
        className="playBtns"
      >
        <PlayArrow className="icons" />
      </button>
      <button
        type="button"
        value="reset"
        onClick={handlePlay}
        className="playBtns"
      >
        <Stop className="icons" />
      </button>
    </div>
  );
}

Play.propTypes = {
  handlePlay: PropTypes.func.isRequired
};

export default Play;
