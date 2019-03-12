import React, { Component } from "react";
import Header from "./Header";
import Options from "./Options";
import Play from "./Play";
import Timer from "./Timer";
import Setting from "./Setting";
import "./App.css";

class App extends Component {
  static timeTostring(numbers) {
    const minutes = parseInt(numbers / 60, 10);
    const seconds = parseInt(numbers % 60, 10);
    const total = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    return total;
  }

  constructor(props) {
    super(props);

    this.state = {
      timer: 5,
      counter: "00:05",
      reset: 5,
      stop: true,
      pomodoro: 5,
      shortBreak: 2,
      longBreak: 3,
      pomodoroSetting: 1500,
      shortBreakSetting: 300,
      longBreakSetting: 600,
      loop: 0,
      isLooping: false,
      scream: "pomodoro",
      showSetting: false
    };

    this.countDown = this.countDown.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.reset = this.reset.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.looper = this.looper.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.settingToggle = this.settingToggle.bind(this);
  }

  settingToggle() {
    this.setState(prevStat => {
      return { showSetting: !prevStat.showSetting };
    });
  }

  setOptions(current) {
    const { pomodoro, shortBreak, longBreak, isLooping, loop } = this.state;
    if (current === "Pomodoro") {
      this.setState({
        timer: pomodoro,
        counter: App.timeTostring(pomodoro),
        reset: pomodoro,
        loop: !isLooping ? 0 : loop,
        scream: "pomodoro"
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (current === "Short Break") {
      this.setState({
        timer: shortBreak,
        counter: App.timeTostring(shortBreak),
        reset: shortBreak,
        loop: !isLooping ? 0 : loop,
        scream: "short-break"
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (current === "Long Break") {
      this.setState({
        timer: longBreak,
        counter: App.timeTostring(longBreak),
        reset: longBreak,
        loop: !isLooping ? 0 : loop,
        scream: "long-break"
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (current === "Loop") {
      this.setState({
        timer: pomodoro,
        counter: App.timeTostring(pomodoro),
        reset: pomodoro,
        loop: 0,
        isLooping: true,
        scream: "pomodoro-loop"
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    }
  }

  handleOptions(event) {
    const option = event.target.value;
    this.setState({ isLooping: false });
    this.setOptions(option);
  }

  countDown() {
    this.myTime = setInterval(() => {
      this.setState(prevStat => {
        return { timer: prevStat.timer - 1 };
      });
      const { timer } = this.state;
      this.setState({
        counter: App.timeTostring(timer),
        stop: false
      });
      /* Stop clock when 0 */
      const { counter, isLooping } = this.state;
      if (counter === "00:00" && isLooping) {
        clearInterval(this.myTime);
        this.setState(prevStat => {
          return { loop: prevStat.loop + 1 };
        });
        this.looper();
      } else if (counter === "00:00") {
        clearInterval(this.myTime);
      }
    }, 1000);
  }

  looper() {
    const { loop } = this.state;
    switch (loop) {
      case 1:
      case 3:
      case 5:
        this.setOptions("Short Break");
        this.countDown();
        break;
      case 2:
      case 4:
      case 6:
        this.setOptions("Pomodoro");
        this.countDown();
        break;
      case 7:
        this.setOptions("Long Break");
        this.countDown();
        break;
      default:
        this.setOptions("Loop");
        break;
    }
  }

  handlePlay(event) {
    event.stopPropagation();
    event.preventDefault();
    const { stop } = this.state;
    const eventCurrent = event.currentTarget.value;
    if (eventCurrent === "play" && stop) {
      clearInterval(this.myTime);
      this.countDown();
    } else if (eventCurrent === "stop") {
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (eventCurrent === "reset") {
      clearInterval(this.myTime);
      this.reset();
    }
  }

  reset() {
    const { reset, isLooping, pomodoro } = this.state;
    this.setState({
      timer: isLooping ? pomodoro : reset,
      counter: App.timeTostring(reset),
      stop: true,
      loop: 0,
      isLooping: !!isLooping
    });
  }

  /* Change the value on custom settings */
  handleChange(name, newVal) {
    this.setState({
      [name]: newVal * 60
    });
  }

  /* Submit settting */
  handleSubmit(event) {
    const { pomodoroSetting, shortBreakSetting, longBreakSetting } = this.state;
    this.setState(
      {
        pomodoro: pomodoroSetting,
        shortBreak: shortBreakSetting,
        longBreak: longBreakSetting,
        showSetting: false
      },
      () => this.setOptions("Pomodoro")
    );
    event.preventDefault();
  }

  render() {
    const { scream, isLooping, timer, showSetting } = this.state;
    return (
      <div className="App">
        <Header settingToggle={this.settingToggle} />
        <div className="container">
          <Options
            handleOptions={this.handleOptions}
            scream={scream}
            isLooping={isLooping}
          />
          <Timer counter={App.timeTostring(timer)} />
          <Play handlePlay={this.handlePlay} />
          <Setting
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            settingToggle={this.settingToggle}
            showSetting={showSetting}
          />
        </div>
      </div>
    );
  }
}

export default App;
