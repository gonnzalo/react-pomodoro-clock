import React, { Component } from "react";
import Header from "./Header";
import Options from "./Options";
import Play from "./Play";
import Timer from "./Timer";
import "./App.css";

class App extends Component {
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
      loop: 0,
      isLooping: false
    };

    this.countDown = this.countDown.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.reset = this.reset.bind(this);
    this.timeTostring = this.timeTostring.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.looper = this.looper.bind(this);
  }

  setOptions(current) {
    const { pomodoro, shortBreak, longBreak, isLooping, loop } = this.state;
    if (current === "Pomodoro") {
      this.setState({
        timer: pomodoro,
        counter: this.timeTostring(pomodoro),
        reset: pomodoro,
        loop: !isLooping ? 0 : loop
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (current === "Short Break") {
      this.setState({
        timer: shortBreak,
        counter: this.timeTostring(shortBreak),
        reset: shortBreak,
        loop: !isLooping ? 0 : loop
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (current === "Long Break") {
      this.setState({
        timer: longBreak,
        counter: this.timeTostring(longBreak),
        reset: longBreak,
        loop: !isLooping ? 0 : loop
      });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (current === "Pomodoro Loop") {
      this.setState({
        timer: pomodoro,
        counter: this.timeTostring(pomodoro),
        reset: pomodoro,
        loop: 0,
        isLooping: true
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
        counter: this.timeTostring(timer),
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
        break;
    }
  }

  handlePlay(event) {
    const { stop } = this.state;
    if (event.target.value === "play" && stop) {
      clearInterval(this.myTime);
      this.countDown();
    } else if (event.target.value === "stop") {
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (event.target.value === "reset") {
      clearInterval(this.myTime);
      this.reset();
    }
  }

  reset() {
    const { reset, isLooping } = this.state;
    this.setState({
      timer: reset,
      counter: this.timeTostring(reset),
      stop: true,
      loop: 0,
      isLooping: !!isLooping
    });
  }

  timeTostring(numbers) {
    const minutes = parseInt(numbers / 60, 10);
    const seconds = parseInt(numbers % 60, 10);
    const total = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    return total;
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <Header />
        <Options handleOptions={this.handleOptions} />
        <Timer counter={counter} />
        <Play handlePlay={this.handlePlay} />
      </div>
    );
  }
}

export default App;
