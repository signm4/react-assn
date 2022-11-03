
import {useEffect, useState} from 'react';
import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <h2><p>You clicked {this.state.count} times</p></h2>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            <h1>Click me</h1>
          </button>
        </div>
      );
    }
  }

export default Counter;
