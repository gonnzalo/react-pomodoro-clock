import React from "react";
import PropTypes from "prop-types";

function Options(props) {
  const { handleOptions } = props;
  return (
    <div>
      <input type="button" value="Pomodoro" onClick={handleOptions} />
      <input type="button" value="Short Break" onClick={handleOptions} />
      <input type="button" value="Long Break" onClick={handleOptions} />
      <input type="button" value="Pomodoro Loop" onClick={handleOptions} />
    </div>
  );
}

Options.propTypes = {
  handleOptions: PropTypes.func.isRequired
};

export default Options;
