import React, { Component } from "react";
import PropTypes from "prop-types";
import "./setting.css";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoroSetting: 25,
      shortBreakSetting: 5,
      longBreakSetting: 10
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { handleChange } = this.props;
    this.setState({ [name]: value });
    handleChange(name, value);
  }

  render() {
    const { pomodoroSetting, shortBreakSetting, longBreakSetting } = this.state;
    const { handleSubmit, settingToggle, showSetting } = this.props;

    return (
      <div className={`setting-container ${showSetting && "active-modal"}`}>
        <input
          type="button"
          className="submit-close"
          name="submit-close"
          value="x"
          onClick={settingToggle}
        />
        <div>
          <h5 className="setting-header">Enter custom setting</h5>
          <p className="setting-options">pomodoro:</p>
          <input
            type="number"
            className="input-setting"
            value={pomodoroSetting}
            name="pomodoroSetting"
            onChange={this.handleChange}
            min="1"
          />
          <p className="setting-options">short break:</p>
          <input
            type="number"
            className="input-setting"
            value={shortBreakSetting}
            name="shortBreakSetting"
            onChange={this.handleChange}
            min="1"
          />
          <p className="setting-options">long break:</p>
          <input
            type="number"
            className="input-setting"
            value={longBreakSetting}
            name="longBreakSetting"
            onChange={this.handleChange}
            min="1"
          />
          <div className="submit-container">
            <input
              type="button"
              className="submit-setting"
              name="submit-cancel"
              value="Cancel"
              onClick={settingToggle}
            />
            <input
              type="submit"
              className="submit-setting"
              name="submit"
              value="Save"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

Setting.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  settingToggle: PropTypes.func.isRequired,
  showSetting: PropTypes.func.isRequired
};

export default Setting;
