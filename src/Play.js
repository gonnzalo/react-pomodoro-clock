import React from "react";
import PropTypes from "prop-types";

function Play(props) {
  const { handlePlay } = props;
  return (
    <header>
      <input type="button" value="stop" onClick={handlePlay} />
      <input type="button" value="play" onClick={handlePlay} />
      <input type="button" value="reset" onClick={handlePlay} />
    </header>
  );
}

Play.propTypes = {
  handlePlay: PropTypes.func.isRequired
};

export default Play;
