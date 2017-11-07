
import React, { Component } from 'react';

class Counter extends Component {
  render () {
    var counterStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return (
      <div style={counterStyle}>
        {this.props.display}
      </div>
    );
  }
}

class CounterParent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  render () {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };

    var buttonStyle = {
      fontSize: "1em",
      width: 60,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };

    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count}/>
        <button style={buttonStyle}>+</button>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <h1>Event Handler App</h1>
        <CounterParent/>
      </div>
    );
  }
}

export default App;
