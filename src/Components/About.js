import React, { Component } from 'react';
import '../CSS/About.css';
import portrait from '../Images/portrait_1080p.png'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCircle: '50%',
      leftCircle: '50%',
      topPortrait: this.props.height * 0.144 + 'px',
      leftPortrait: '-' + this.props.width * 0.074 + 'px'
    };
  }

  parallax(e, windowHeight, circleHeight, windowWidth) {
    this.setState({ topCircle: (windowHeight) - (e.clientY * 6 / (windowHeight * 2)) + 'px',
                    leftCircle: (windowWidth) - (e.clientX * 6 / (windowWidth * 2)) + 'px',
                    topPortrait: (this.props.height * 0.144) - (e.clientY * 12 / (windowHeight * 2)) + 'px',
                    leftPortrait: (-(this.props.width * 0.073)) - (e.clientX * 12 / (windowWidth * 2)) + 'px' });
  }

  render() {
    return (
      <div className="About"
        onMouseMove={(e) => { this.parallax(e, window.innerHeight / 2, this.refs.circle.clientHeight / 2, window.innerWidth / 2) }}>
          <div className="circle" ref="circle" style={{ top: this.state.topCircle, left: this.state.leftCircle, transform: this.state.transformCircle }}>
            <img src={portrait} className="portrait" style={{ top: this.state.topPortrait, left: this.state.leftPortrait  }}/>
          </div>
      </div>
    );
  }
}

export default About;
