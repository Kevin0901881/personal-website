import React, { Component } from 'react';
import '../CSS/About.css';
import portrait from '../Images/portrait_1080p.png'
import rightArrow from '../Images/right_arrow.png'
import rightArrowDark from '../Images/right_arrow_dark.png'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCircle: '50%',
      leftCircle: '25%',
      topPortrait: this.props.height * 0.144 + 'px',
      leftPortrait: '-' + this.props.width * 0.05 + 'px',
      topText: this.props.height * 0.31 + 'px', // TODO: change to bottom
      leftText: this.props.width * 0.345 + 'px',
      bodyWidth: this.props.width * 0.5625 + 'px',
      colWidth: this.props.width * 0.2656 + 'px',
      shiftArrow: 'translateX(0px)',
      arrowOpacity: '0'
    };
  }

  parallax(e, windowHeight, circleHeight, windowWidth) {
    this.setState({ topCircle: (windowHeight) - (e.clientY * 4 / (windowHeight * 2)) + 'px',
                    leftCircle: (windowWidth / 2) - (e.clientX * 4 / (windowWidth * 2)) + 'px',
                    topPortrait: (this.props.height * 0.144) - (e.clientY * 8 / (windowHeight * 2)) + 'px',
                    leftPortrait: (-(this.props.width * 0.05)) - (e.clientX * 8 / (windowWidth * 2)) + 'px'
                    // topText: (-(this.props.height * 0.45)) + (e.clientY * 4 / (windowHeight * 2)) + 'px',
                    // leftText: (this.props.width * 0.25) + (e.clientX * 4 / (windowWidth * 2)) + 'px'
                   });
  }

  render() {
    console.log(this.props.width);
    return (
      <div className="About"
        onMouseMove={(e) => { this.parallax(e, window.innerHeight / 2, this.refs.circle.clientHeight / 2, window.innerWidth / 2) }}>
          <div className="circle" ref="circle" style={{ top: this.state.topCircle, left: this.state.leftCircle, transform: this.state.transformCircle }}>
            <img src={portrait} className="portrait" style={{ top: this.state.topPortrait, left: this.state.leftPortrait  }}/>
          </div>
          <div className="text" style={{ top: this.state.topText, left: this.state.leftText }}>
            <div className="title">STUDENT - DEVELOPER - DESIGNER</div>
            <div className="body">
                <div className="left" style={{ width: this.state.colWidth }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est.
                </div>
                <div className="right" style={{ width: this.state.colWidth }}>
                    Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                </div>
            </div>
            <div className="resume" onMouseEnter={() => { this.setState({ shiftArrow: 'translateX(8px)', arrowOpacity: '1' }) }}
                 onMouseLeave={() => { this.setState({ shiftArrow: 'translateX(0px)', arrowOpacity: '0' }) }} >
                VIEW RESUME
                <img src={rightArrow} className="rightArrow" style={{ transform: this.state.shiftArrow }} />
                <img src={rightArrowDark} className="rightArrowDark" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity }} />
            </div>
          </div>
          <div className="scrollDown">
              SCROLL DOWN
          </div>
      </div>
    );
  }
}

export default About;
