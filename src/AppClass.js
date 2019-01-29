import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  componentDidMount() {
    document.title = `you have clicked ${this.state.count} times`;

    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `have have clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };
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

        <h2>Mouse Position</h2>
        <p>x position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </React.Fragment>
    );
  }
}

export default App;
