import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component will unmount ");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The count number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
