import React from "react";

function Timer(props) {
  const { counter } = props;
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

export default Timer;
