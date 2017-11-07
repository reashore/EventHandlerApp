import React, { Component } from 'react';

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

  export default Counter;
