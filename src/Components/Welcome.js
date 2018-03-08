import React, { Component } from 'react';
import '../CSS/Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 81,
      background: "linear-gradient(to bottom, #5cd9b1 0%, #000000 " + 81 + "%)"
    };
  }

  render() {
    return (
      <div className="Welcome" onMouseMove={(e) => {this.setState({
        pos: 73 + (e.clientY * 8/window.innerHeight), background: "linear-gradient(to bottom, #5cd9b1 0%, #000000 " + this.state.pos + "%)" })}}>
          <div className="title" style={{ backgroundImage: this.state.background }}>
              KEVIN
          </div>
          <div className="scrollDown">
              SCROLL DOWN
          </div>
      </div>
    );
  }
}

export default Welcome;
