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
    this.setState({ opacity: 0 });
  }

  render() {
    return (
      <div className="Loader">
          <img src={logoWhole} className="logoWholeLoader" ref="logo" style={{ opacity: this.state.opacity }} />
      </div>
    );
  }
}

export default Loader;
