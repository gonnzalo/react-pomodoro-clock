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
      timer: "25:00"
    };
  }

  render() {
    const { timer } = this.state;
    return (
      <div className="App">
        <Header />
        <Options />
        <Timer timer={timer} />
        <Play />
      </div>
    );
  }
}

export default App;
