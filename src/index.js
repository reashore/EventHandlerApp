
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Counter extends Component {
    render() {
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
  
    render() {
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
            <button style={buttonStyle}>+</button>
          </div>
        </div>
      );
    }
  }
  

var destination = document.getElementById('root');
ReactDOM.render(<CounterParent />, destination);

registerServiceWorker();
