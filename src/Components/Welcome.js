import React, { Component } from 'react';
import '../CSS/Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 81,
      background: "linear-gradient(to bottom, #5cd9b1 0%, #000000 " + 81 + "%)",
      top: '50%',
      opacity: 1
    };
  }

  in() {
    setTimeout( function() {
      this.setState({ top: '50%', opacity: 1 });
    }.bind(this), 200);
  }

  out() {
    this.setState({ top: -this.refs.kevin.clientHeight + 'px', opacity: 0 });
  }

  render() {
    return (
      <div className="Welcome" onMouseMove={(e) => {this.setState({
        pos: 73 + (e.clientY * 8 / window.innerHeight), background: "linear-gradient(to bottom, #5cd9b1 0%, #000000 " + this.state.pos + "%)" })}}
        style={{ display: this.props.display }}>
          <div className="kevin" ref="kevin" style={{ backgroundImage: this.state.background, top: this.state.top, opacity: this.state.opacity }}>
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
