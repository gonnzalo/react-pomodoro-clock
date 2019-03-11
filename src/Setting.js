import React, { Component } from "react";

export default class Setting extends Component {
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
    const { handleSubmit } = this.props;
    return (
      <div>
        <input
          type="number"
          value={pomodoroSetting}
          name="pomodoroSetting"
          onChange={this.handleChange}
          min="1"
        />
        <input
          type="number"
          value={shortBreakSetting}
          name="shortBreakSetting"
          onChange={this.handleChange}
          min="1"
        />
        <input
          type="number"
          value={longBreakSetting}
          name="longBreakSetting"
          onChange={this.handleChange}
          min="1"
        />
        <input
          type="submit"
          name="submit"
          value="Change"
          onClick={handleSubmit}
        />
      </div>
    );
  }
}
