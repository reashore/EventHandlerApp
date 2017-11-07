
import React, { Component } from 'react';
import Counter from './Counter';

class CounterParent extends Component {
    constructor () {
      super();
  
      this.state = {
        count: 0
      }

      this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount (event) {
      this.setState({
        count: this.state.count + 1
      })
    }

    componentWillUpdate (newProps, newState) {
      console.log("componentWillUpdate ", newProps, newState);
    }

    componentDidUpdate (currentProps, currentState) {
      console.log("componentDidUpdate", currentProps, currentState);
    }

    componentWillMount () {
      console.log("componentWillMount");
    }

    componentDidMount () {
      console.log("componentDidMount");
    }
  
    componentWillUnmount () {
      console.log("componentWillUnmount");
    }
  
    shouldComponentUpdate (newProps, newState) {
      console.log("shouldComponentUpdate");
      return true;
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
        <div>
          <h1>Event Handler App</h1>
          <div style={backgroundStyle}>
            <Counter display={this.state.count} />
            <button onClick={this.increaseCount} style={buttonStyle}>+</button>
          </div>
        </div>
      );
    }
  }
  
export default CounterParent;
