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
      timer: 1500,
      counter: "25:00",
      reset: 1500,
      stop: true,
      pomodoro: true,
      shortBreak: false,
      longBreak: false
    };

    this.countDown = this.countDown.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.reset = this.reset.bind(this);
  }

  handlePlay(event) {
    const { stop } = this.state;
    if (event.target.value === "play" && stop) {
      clearInterval(this.myTime);
      this.countDown();
    } else if (event.target.value === "stop") {
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else {
      clearInterval(this.myTime);
      this.reset();
    }
  }

  countDown() {
    this.myTime = setInterval(() => {
      this.setState(prevStat => {
        return { timer: prevStat.timer - 1 };
      });
      const { timer } = this.state;
      const minutes = parseInt(timer / 60, 10);
      const seconds = parseInt(timer % 60, 10);
      this.setState({
        counter: `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`,
        stop: false
      });
    }, 1000);
  }

  reset() {
    const { reset } = this.state;
    const minutes = parseInt(reset / 60, 10);
    const seconds = parseInt(reset % 60, 10);
    this.setState({
      timer: reset,
      counter: `${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`,
      stop: true
    });
  }

  handleOptions(event) {
    if (event.target.value === "Pomodoro") {
      this.setState({ timer: 1500, counter: "25:00", reset: 1500 });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (event.target.value === "Short Break") {
      this.setState({ timer: 300, counter: "05:00", reset: 300 });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    } else if (event.target.value === "Long Break") {
      this.setState({ timer: 600, counter: "10:00", reset: 600 });
      clearInterval(this.myTime);
      this.setState({ stop: true });
    }
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
