import React, { Component } from 'react';
import '../CSS/Resume.css';
import leftArrow from '../Images/left_arrow.png'
import leftArrowDark from '../Images/left_arrow_dark.png'
import resume from '../Images/resume.png'

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shiftArrow: 'translateX(0px)',
      arrowOpacity: '1',
      arrowOpacity2: '0',
      width: this.props.width * 0.55 + 'px'
    }
  }

  render() {
    return (
      <div className="Resume" style={{ width: this.props.width * 0.55 + 'px' }}>
          <div className="backResume" onMouseEnter={() => { this.setState({ shiftArrow: 'translateX(-8px)', arrowOpacity: '0', arrowOpacity2: '1' }) }}
               onMouseLeave={() => { this.setState({ shiftArrow: 'translateX(0px)', arrowOpacity: '1', arrowOpacity2: '0' }) }}
               onClick={() => { this.props.hideResume() }}>
              <img src={leftArrow} className="leftArrow" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity }} />
              <img src={leftArrowDark} className="leftArrowDark" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity2 }} />
              BACK
          </div>
          <img src={resume} className="resume" />
      </div>
    );
  }
}

export default Resume;
