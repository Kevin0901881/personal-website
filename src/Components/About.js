import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../CSS/About.css';
import Resume from './Resume.js'
import Scrollbar from './Scrollbar.js'
import Constants from './Constants.js'
import portrait from '../Images/portrait_1080p.png'
import rightArrow from '../Images/right_arrow.png'
import rightArrowDark from '../Images/right_arrow_dark.png'

class About extends Component {
  constructor(props) {
    super(props);
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.dimens = Constants.CENTER_SHAPE_DIMENS;
    this.state = {
      topCircle: '',
      // leftCircle: '25%',
      leftCircle: '50%',
      topPortrait: '',
      leftPortrait: '',
      topText: '',
      leftText: this.width * 0.345 + 'px',
      bodyWidth: this.width * 0.5625 + 'px',
      colWidth: this.width * 0.2656 + 'px',
      shiftArrow: 'translateX(0px)',
      arrowOpacity: '1',
      arrowOpacity2: '0',
      paddingRight: window.offsetWidth - window.clientWidth + 'px',
      displayText: 'none',
      displayResume: 'none',
      opacityCircle: 0,
      opacityTitle: 0,
      opacityBody: 0,
      opacityResumeButton: 0,
      opacityResume: 0,
      transformTitle: 'translateY(50px)',
      transformBody: 'translateY(50px)',
      transformResumeButton: 'translateY(50px)',
      transformCircle: 'translate(-50%, -50%)',
      transformPortrait: 'translate(0, -20px)',
      transitionCircle: '',
      opacityAbout: 1,
      opacityResume: 0,
      topResume: '',
      marginBottomResume: '',
      opacityScrollbar: 0,
      foregroundHeight: 0
    };

    this.hideResume = this.hideResume.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  parallax(e) {
    this.setState({ transformCircle: 'translate(' + (this.dimens * -0.5 + (e.clientX * 4 / (this.width * 2))) + 'px, ' + (this.dimens * -0.5 + (e.clientY * 4 / (this.height * 2))) + 'px)',
                    // leftCircle: (windowWidth / 2) - (e.clientX * 4 / (windowWidth * 2)) + 'px',
                    transformPortrait: 'translate(' + (e.clientX * 8 / (this.width * 2)) + 'px, ' + (-20 + (e.clientY * 8 / (this.height * 2))) + 'px)'
                    // topText: (this.height * 0.31) + (e.clientY * 3 / (windowHeight * 2)) + 'px',
                    // leftText: (this.width * 0.345) + (e.clientX * 3 / (windowWidth * 2)) + 'px'
                   });
  }

  page1in() {
    this.parallax(window.event);
    this.setState({ topCircle: this.height + this.dimens + 'px', leftPortrait: this.dimens / 3 - this.refs.portrait.clientWidth / 2 + 'px',
                    topPortrait: this.dimens / 2 + 'px', transitionCircle: '', topText: this.height / 2 - 40 + 'px',
                    topResume: this.height + 'px', marginBottomResume: (this.height - this.dimens) / 2 + this.dimens / 6 + 'px' });
    setTimeout( function() {
      this.setState({ topCircle: '50%', topPortrait: this.dimens / 4 + 'px', opacityCircle: 1, transitionCircle: 'top 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000), left 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000), opacity 0.6s linear' });
    }.bind(this), 200);
  }

  page1out() {
    this.setState({ topCircle: this.height + this.dimens + 'px',  topPortrait: this.height * 0.3 + 'px', opacityCircle: 0 });
  }

  page1inPage2out() {
    this.setState({ leftCircle: '50%', opacityResumeButton: 0, transformResumeButton: 'translateY(50px)' });
    setTimeout( function() {
      this.setState({ opacityBody: 0, transformBody: 'translateY(50px)' });
    }.bind(this), 75);
    setTimeout( function() {
      this.setState({ opacityTitle: 0, transformTitle: 'translateY(50px)' });
    }.bind(this), 150);
    setTimeout( function() {
      this.setState({ displayText: 'none' });
    }.bind(this), 450);
  }

  page2inPage1out() {
    this.setState({ leftCircle: '25%', displayText: 'block' });
    setTimeout( function() {
      this.setState({ transformTitle: 'translateY(0)' });
    }.bind(this), 400);
    setTimeout( function() {
      this.setState({ opacityTitle: 1, transformBody: 'translateY(0)' });
    }.bind(this), 475);
    setTimeout( function() {
      this.setState({ opacityBody: 1, transformResumeButton: 'translateY(0)' });
    }.bind(this), 550);
    setTimeout( function() {
      this.setState({ opacityResumeButton: 1 });
    }.bind(this), 625);
  }

  page2in() {
    setTimeout( function() {
      this.setState({ topCircle: '50%', topPortrait: this.dimens / 4 + 'px',
                      topText: this.height / 2 - 40 + 'px', opacityAbout: 1 });
    }.bind(this), 200);
  }

  page2out() {
    this.setState({ topCircle: -this.dimens + 'px', topPortrait: '0px',
                    topText: -this.refs.textAbout.clientHeight - this.dimens / 2 + 'px', opacityAbout: 0 });
  }

  page2out2() {
    this.setState({ topCircle: this.height + this.dimens + 'px', topPortrait: this.height * 0.3 + 'px',
                    topText: this.refs.textAbout.clientHeight + this.dimens / 2 + 'px', opacityAbout: 0 });
  }

  showResume() {
    this.props.activateResume();
    this.setState({ opacityTitle: 0, transformTitle: 'translateY(-50px)' });
    setTimeout( function() {
      this.setState({ opacityBody: 0, transformBody: 'translateY(-50px)' });
    }.bind(this), 75);
    setTimeout( function() {
      this.setState({ opacityResumeButton: 0, transformResumeButton: 'translateY(-50px)' });
    }.bind(this), 150);
    setTimeout( function() {
      this.setState({ displayText: 'none', displayResume: 'block' });
    }.bind(this), 450);
    setTimeout( function() {
      this.setState({ opacityResume: 1, topResume: (this.height - this.dimens) / 2 + 'px', opacityScrollbar: 1 });
    }.bind(this), 475);
  }

  hideResume() {
    this.setState({ opacityResume: 0, topResume: this.height + 'px', opacityScrollbar: 0 });
    setTimeout( function() {
      this.setState({ displayText: 'block', displayResume: 'none', opacityResumeButton: 0, transformResumeButton: 'translateY(-50px)' });
    }.bind(this), 600);
    setTimeout( function() {
      this.setState({ opacityResumeButton: 1, transformResumeButton: 'translateY(0px)' });
    }.bind(this), 630);
    setTimeout( function() {
      this.setState({ opacityBody: 1, transformBody: 'translateY(0px)' });
    }.bind(this), 705);
    setTimeout( function() {
      this.setState({ opacityTitle: 1, transformTitle: 'translateY(0px)' });
      this.props.activateResume();
    }.bind(this), 780);
  }

  handleScroll() {
    this.setState({ foregroundHeight: this.refs.about.scrollTop / (this.refs.about.scrollHeight - this.refs.about.clientHeight) * (this.dimens / 2) });
  }

  render() {
    return (
      <div className="About" ref="about" style={{ paddingRight: '50px', display: this.props.display, opacity: this.state.opacityAbout }} onWheel={this.handleScroll}
           onMouseMove={(e) => { this.parallax(e) }} onScroll={(e) => { this.handleScroll() }}>
          <div className="circle" ref="circle" style={{ top: this.state.topCircle, left: this.state.leftCircle, opacity: this.state.opacityCircle, transform: this.state.transformCircle, transition: this.state.transitionCircle }}>
            <img src={portrait} className="portrait" ref="portrait" style={{ top: this.state.topPortrait, left: this.state.leftPortrait, transform: this.state.transformPortrait }}/>
          </div>
          <div className="resume" style={{ top: this.state.topResume, left: this.state.leftText, marginBottom: this.state.marginBottomResume,
                                           display: this.state.displayResume, opacity: this.state.opacityResume }} ref="resume">
            <Resume width={this.width} hideResume={this.hideResume} />
          </div>
          <div className="scrollbar" style={{ opacity: this.state.opacityScrollbar }}>
            <Scrollbar background={Constants.SECONDARYCOLOR1} foregroundHeight={this.state.foregroundHeight} foregroundBackground={Constants.PRIMARYCOLOR2} />
          </div>
          <div className="textAbout" ref="textAbout" style={{ top: this.state.topText, left: this.state.leftText, display: this.state.displayText }}>
            <div className="titleAbout" style={{ opacity: this.state.opacityTitle, transform: this.state.transformTitle }}>STUDENT - DEVELOPER - DESIGNER</div>
            <div className="bodyAbout" style={{ width: this.state.bodyWidth, opacity: this.state.opacityBody, transform: this.state.transformBody }}>
                <div className="leftColumn" style={{ width: this.state.colWidth, opacity: this.state.opacityLeft }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est.
                </div>
                <div className="rightColumn" style={{ width: this.state.colWidth, opacity: this.state.opacityRight }}>
                    Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                </div>
            </div>
            <div className="resumeButton" onMouseEnter={() => { this.setState({ shiftArrow: 'translateX(8px)', arrowOpacity: '0', arrowOpacity2: '1' }) }}
                 onMouseLeave={() => { this.setState({ shiftArrow: 'translateX(0px)', arrowOpacity: '1', arrowOpacity2: '0' }) }}
                 onClick={() => { this.showResume() }}
                 style={{ opacity: this.state.opacityResumeButton, transform: this.state.transformResumeButton }}>
                VIEW RESUME
                <img src={rightArrow} className="rightArrow" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity }} />
                <img src={rightArrowDark} className="rightArrowDark" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity2 }} />
            </div>
          </div>
      </div>
    );
  }
}

export default About;
