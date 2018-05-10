import React, { Component } from 'react';
import '../CSS/Loader.css';
import logoWhole from '../Images/logo_whole_welcome.png'

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    }
  }

  out() {
    this.setState({ opacity: 0, opacityBeta: 0 });
  }

  render() {
    return (
      <div className="Loader">
          <img src={logoWhole} className="logoWholeLoader" style={{ opacity: this.state.opacity }} />
          <div className="beta" style={{ opacity: this.state.opacityBeta }}>BETA</div>
      </div>
    );
  }
}

export default Loader;
