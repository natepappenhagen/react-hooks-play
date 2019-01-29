import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false
  };

  componentDidMount() {
    document.title = `you have clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `have have clicked ${this.state.count} times`;
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
          I was clicked {this.state.count} times!
        </button>

        <h2>Toggle Light</h2>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "orange" : "#303030"
          }}
          onClick={this.toggleLight}
        />
      </React.Fragment>
    );
  }
}

export default App;
