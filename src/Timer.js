import React from "react";

function Timer(props) {
  const { timer } = props;
  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
}

export default Timer;
