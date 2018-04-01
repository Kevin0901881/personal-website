import React, { Component } from 'react';
import '../CSS/Portfolio.css';
import left1 from '../Images/portfolio1_left.png';
import right1 from '../Images/portfolio1_right.png';
import left2 from '../Images/portfolio2_left.png';
import right2 from '../Images/portfolio2_right.png';
import left3 from '../Images/portfolio3_left.png';
import right3 from '../Images/portfolio3_right.png';
import left4 from '../Images/portfolio4_left.png';
import right4 from '../Images/portfolio4_right.png';
import left5 from '../Images/portfolio5_left.png';
import right5 from '../Images/portfolio5_right.png';
import left6 from '../Images/portfolio6_left.png';
import right6 from '../Images/portfolio6_right.png';
import left7 from '../Images/portfolio7_left.png';
import right7 from '../Images/portfolio7_right.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.dimens = 480;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.state = {
      arrowOpacityLeft: 0,
      arrowOpacityRight: 0,
      arrowOpacityLeft2: 0,
      arrowOpacityRight2: 0,
      arrowLeft: left1,
      arrowRight: right1,
      arrowLeft2: left1,
      arrowRight2: right1,
      leftArrow: '',
      bottomArrow: '',
      bottomProgress: '',
      progressWidth: '',
      progressBackground: '#1b1b1b',
      progressForeground: '#ffffff',
      backgroundColor: '#000000',
      backgroundSquare: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,0,0,0) 100%)',
      backgroundSquare2: 'linear-gradient(to bottom, #04307b 0%, rgba(255,0,0,0) 100%)',
      opacitySquare: 0,
      opacitySquare2: 0,
      bottomSquare: '',
      leftSquare: '',
      leftSquare2: '',
      transition: '',
      heightSquare: '0px',
      heightSquare2: '0px',
      opacityProgress: 0
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  in() {
    this.setState({ opacitySquare: 0 });
    setTimeout( function() {
      this.setState({ transition: 'opacity 0.6s linear, height 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000)', opacitySquare: 1,
                      bottomSquare: 0.5 * (this.height - this.dimens) + 'px', bottomProgress: (this.height - this.dimens) / 4,
                      leftSquare: 0.5 * this.width, leftSquare2: 0.5 * this.width + this.dimens, heightSquare: this.dimens + 'px' });
    }.bind(this), 200);
    setTimeout( function() {
      this.setState({ arrowOpacityRight: 1, opacityProgress: 1 });
    }.bind(this), 700);
  }

  out() {
    this.setState({ transition: 'opacity 0.6s linear, height 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000)', opacitySquare: 0,
                    heightSquare: '0px', arrowOpacityRight: 0, opacityProgress: 0 });
  }

  updateScene(next) {
    if (next) {
      switch (this.props.currentPage) {
        case 4:
          this.setState({ progressBackground: '#1b1b1b', progressForeground: '#ffffff', backgroundColor: '#000000' });
          break;
        case 5:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth + this.dimens });
          this.setState({ arrowLeft: left1, arrowRight: right1, arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, #04307b 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#b52948', progressForeground: '#04307b', backgroundColor: '#e3395e' });
          break;
        case 6:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth + this.dimens });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #321914 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#b5b5b5', progressForeground: '#321914', backgroundColor: '#e0e0e0' });
          break;
        case 7:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, #e7bc53 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#a2192a', progressForeground: '#e7bc53', backgroundColor: '#cb1931' });
          break;
        case 8:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth + this.dimens });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #000000 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#118f3d', progressForeground: '#000000', backgroundColor: '#15bf50' });
          break;
        case 9:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, #e4e4f0 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#572933', progressForeground: '#e4e4f0', backgroundColor: '#7b3947' });
          break;
        case 10:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth + this.dimens });
          this.setState({ arrowLeft: left7, arrowRight: right7, arrowOpacityLeft: 1, arrowOpacityRight: 0, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #faad55 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#012165', progressForeground: '#faad55', backgroundColor: '#0336a1' });
          break;
      }
    } else {
      switch (this.props.currentPage) {
        case 4:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth - this.dimens });
          this.setState({ arrowLeft: left1, arrowRight: right1, arrowOpacityLeft: 0, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#1b1b1b', progressForeground: '#ffffff', backgroundColor: '#000000' });
          break;
        case 5:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, #04307b 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#b52948', progressForeground: '#04307b', backgroundColor: '#e3395e' });
          break;
        case 6:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth - this.dimens });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #321914 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#b5b5b5', progressForeground: '#321914', backgroundColor: '#e0e0e0' });
          break;
        case 7:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, #e7bc53 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#a2192a', progressForeground: '#e7bc53', backgroundColor: '#cb1931' });
          break;
        case 8:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth - this.dimens });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #000000 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#118f3d', progressForeground: '#000000', backgroundColor: '#15bf50' });
          break;
        case 9:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth - this.dimens });
          this.setState({ arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.dimens,
                          transition: 'opacity 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                          progressBackground: '#572933', progressForeground: '#e4e4f0', backgroundColor: '#7b3947' });
          break;
        case 10:
          this.setState({ progressBackground: '#012165', progressForeground: '#faad55', backgroundColor: '#0336a1' });
          break;
      }
    }
  }

  updateDimensions() {
    this.setState({ leftArrow: (this.width - this.dimens) / 4 - 0.5 * this.refs.prev.clientWidth,
       bottomArrow: 0.5 * (this.height - this.refs.prev.clientHeight),
       bottomProgress: (this.height - this.dimens) / 4,
       widthProgress: 0.5 * this.dimens,
       bottomSquare: 0.5 * (this.height - this.dimens),
       leftSquare: 0.5 * this.width, leftSquare2: 0.5 * this.width });
  }

  render() {
    return (
      <div className="Portfolio" ref="Portfolio" style={{ background: this.state.backgroundColor, display: this.props.display }}>
          <img src={this.state.arrowLeft2} className="prev" ref="prev2" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityLeft2 }} />
          <img src={this.state.arrowLeft} className="prev" ref="prev" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityLeft }} />
          {/* <div className="squareLeft" ref="squareLeft" style={{ background: this.state.backgroundSquareLeft }} /> */}
          <div className="square" ref="square2" style={{ background: this.state.backgroundSquare2, opacity: this.state.opacitySquare2, bottom: this.state.bottomSquare,
                                                         left: this.state.leftSquare2, transition: this.state.transition, height: this.state.heightSquare2 }} />
          <div className="square" ref="square" style={{ background: this.state.backgroundSquare, opacity: this.state.opacitySquare, bottom: this.state.bottomSquare,
                                                        left: this.state.leftSquare, transition: this.state.transition, height: this.state.heightSquare }} />
          {/* <div className="squareRight" ref="squareRight" style={{ background: this.state.backgroundSquareRight }} /> */}
          <img src={this.state.arrowRight2} className="next" ref="next2" style={{ right: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityRight2 }} />
          <img src={this.state.arrowRight} className="next" ref="next" style={{ right: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityRight }} />
          <div className="progressBarBackground" style={{ bottom: this.state.bottomProgress, width: this.state.widthProgress, background: this.state.progressBackground, opacity: this.state.opacityProgress }}>
               <div className="progressBarForeground" style={{ width: ((this.props.currentPage - 4) * 100 / 6) + '%', background: this.state.progressForeground }}></div>
          </div>
      </div>
    );
  }
}

export default Portfolio;
