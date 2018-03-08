import React, { Component } from 'react';
import '../CSS/About.css';
import portrait from '../Images/portrait_1080p.png'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCircle: '50%',
      leftCircle: '50%',
      transformCircle: 'translate(-50%, -50%)',
      topPortrait: '120px',
      leftPortrait: '-75px'
    };
  }

  render() {
    var height = window.innerHeight / 2;
    var width = window.innerWidth / 2;
    return (
      <div className="About"
        onMouseMove={(e) => { console.log(e.clientY) }}>
          <div className="circle" style={{ top: this.state.topCircle, left: this.state.leftCircle, transform: this.state.transformCircle }}>
            <img src={portrait} className="portrait" style={{ top: this.state.topPortrait, left: this.state.leftPortrait  }}/>
          </div>
      </div>
    );
  }
}

export default About;
