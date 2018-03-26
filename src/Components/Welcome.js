import React, { Component } from 'react';
import '../CSS/Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 81,
      background: "linear-gradient(to bottom, #5cd9b1 0%, #000000 " + 81 + "%)",
      translate: 'translate(-50%, -50%)',
      opacity: 1
    };
  }

  in() {
    this.setState({ translate: 'translate(-50%, -50%)', opacity: 1 });
  }

  out() {
    this.setState({ translate: 'translate(-50%, -' + window.innerHeight / 2 + 'px)', opacity: 0 });
  }

  render() {
    return (
      <div className="Welcome" onMouseMove={(e) => {this.setState({
        pos: 73 + (e.clientY * 8 / window.innerHeight), background: "linear-gradient(to bottom, #5cd9b1 0%, #000000 " + this.state.pos + "%)" })}}
        style={{ display: this.props.display }}>
          <div className="kevin" style={{ backgroundImage: this.state.background, transform: this.state.translate, opacity: this.state.opacity, transition: this.state.transition }}>
              KEVIN
          </div>
      </div>
    );
  }
}

export default Welcome;
