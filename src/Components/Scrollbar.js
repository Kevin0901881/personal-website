import React, { Component } from 'react';
import '../CSS/Scrollbar.css';
import Constants from './Constants.js'

class Scrollbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Scrollbar" style={{ height: this.props.dimens / 2 + 'px', background: this.props.background }}>
          <div className="scrollbarForeground" style={{ height: this.props.foregroundHeight + 'px', background: this.props.foregroundBackground }}></div>
      </div>
    );
  }
}

export default Scrollbar;
