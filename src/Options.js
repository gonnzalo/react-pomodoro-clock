import React from "react";

function Options(props) {
  const { handleOptions } = props;
  return (
    <div>
      <input type="button" value="Pomodoro" onClick={handleOptions} />
      <input type="button" value="Short Break" onClick={handleOptions} />
      <input type="button" value="Long Break" onClick={handleOptions} />
    </div>
  );
}

export default Options;
