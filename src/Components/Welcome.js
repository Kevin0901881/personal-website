import React, { Component } from 'react';
import '../CSS/Welcome.css';
import Constants from './Constants.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 81,
      background: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR1 + ' 0%, rgba(255,0,0,0) ' + 81 + '%)',
      top: '50%',
      opacity: 1
    };
  }

  in() {
    setTimeout( function() {
      this.setState({ top: '50%', opacity: 1, scrollDownOpacity: 1 });
    }.bind(this), 200);
  }

  out() {
    this.setState({ top: -this.refs.kevin.clientHeight + 'px', opacity: 0, scrollDownOpacity: 0 });
  }

  render() {
    return (
      <div className="Welcome" onMouseMove={(e) => {this.setState({
        pos: 73 + (e.clientY * 8 / window.innerHeight), background: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR1 + ' 0%, rgba(255,0,0,0) ' + this.state.pos + '%)' })}}
        style={{ display: this.props.display }}>
          <div className="kevin" ref="kevin" style={{ backgroundImage: this.state.background, top: this.state.top, opacity: this.state.opacity }}>
              KEVIN
          </div>
          <div className="scrollDown" ref="scrollDown" style={{ opacity: this.state.scrollDownOpacity }}>
              SCROLL DOWN
          </div>
      </div>
    );
  }
}

export default Welcome;
