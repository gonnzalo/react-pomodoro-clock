import React from "react";

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

export default Play;
