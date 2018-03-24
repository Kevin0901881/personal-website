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

    this.height;
    this.width;
    this.state = {
      arrowOpacityLeft: 0,
      arrowOpacityRight: 1,
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
      opacitySquare: 1,
      opacitySquare2: 0,
      bottomSquare: '',
      leftSquare: '',
      leftSquare2: '',
      transition: '',
      heightSquare: '',
      heightSquare2: '',
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.height = this.refs.square.clientHeight;
    this.width = this.refs.square.clientWidth;
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    this.setState({ bottomSquare: 0.5 * height - this.height / 2,
                    leftSquare: 0.5 * width, leftSquare2: 0.5 * width + this.width,
                    bottomProgress: (height - this.height) / 4, heightSquare: this.height, heightSquare2: 0 });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateScene(next) {
    switch (this.props.currentPage) {
      case 4:
        this.setState({ progressBackground: '#1b1b1b', progressForeground: '#ffffff', backgroundColor: '#000000' });
        break;
      case 5:
        this.setState({ progressBackground: '#b52948', progressForeground: '#04307b', backgroundColor: '#e3395e' });
        break;
      case 6:
        this.setState({ progressBackground: '#b5b5b5', progressForeground: '#321914', backgroundColor: '#e0e0e0' });
        break;
      case 7:
        this.setState({ progressBackground: '#a2192a', progressForeground: '#e7bc53', backgroundColor: '#cb1931' });
        break;
      case 8:
        this.setState({ progressBackground: '#118f3d', progressForeground: '#000000', backgroundColor: '#15bf50' });
        break;
      case 9:
        this.setState({ progressBackground: '#572933', progressForeground: '#e4e4f0', backgroundColor: '#7b3947' });
        break;
      case 10:
        this.setState({ progressBackground: '#012165', progressForeground: '#faad55', backgroundColor: '#0336a1' });
        break;
    }
    if (next) {
      switch (this.props.currentPage) {
        case 5:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth + this.width });
          this.setState({ arrowLeft: left1, arrowRight: right1, arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.height,
                          backgroundSquare2: 'linear-gradient(to bottom, #04307b 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 6:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth + this.width });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.height,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #321914 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 7:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.height,
                          backgroundSquare2: 'linear-gradient(to bottom, #e7bc53 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 8:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth + this.width });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.height,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #000000 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 9:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.height,
                          backgroundSquare2: 'linear-gradient(to bottom, #e4e4f0 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 10:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth + this.width });
          this.setState({ arrowLeft: left7, arrowRight: right7, arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 1, arrowOpacityRight: 0, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.height,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #faad55 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
      }
    } else {
      switch (this.props.currentPage) {
        case 4:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth - this.width });
          this.setState({ arrowLeft: left1, arrowRight: right1, arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.height,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 5:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.height,
                          backgroundSquare2: 'linear-gradient(to bottom, #04307b 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 6:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth - this.width });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.height,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #321914 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 7:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth - this.refs.square2.clientWidth });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.height,
                          backgroundSquare2: 'linear-gradient(to bottom, #e7bc53 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 8:
          this.setState({ transition: '', leftSquare: 0.5 * window.innerWidth - this.width });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * window.innerWidth, heightSquare: this.height,
                          opacitySquare2: 0, leftSquare2: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, #000000 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
        case 9:
          this.setState({ transition: '', leftSquare2: 0.5 * window.innerWidth - this.width });
          this.setState({ arrowLeft: left7, arrowRight: right7, arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * window.innerWidth + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * window.innerWidth, heightSquare2: this.height,
                          transition: 'opacity 0.25s ease-in-out, top 0.25s ease-in-out, left 0.25s ease-in-out, height 0.25s cubic-bezier(0.645, 0.045, 0.355, 1.000)' });
          break;
      }
    }
  }

  updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({ leftArrow: (width - this.width) / 4 - 0.5 * this.refs.prev.clientWidth,
       bottomArrow: 0.5 * (height - this.refs.prev.clientHeight),
       bottomProgress: (height - this.height) / 4,
       widthProgress: 0.5 * this.width,
       bottomSquare: 0.5 * (height - this.height),
       leftSquare: 0.5 * width, leftSquare2: 0.5 * width });
  }

  render() {
    return (
      <div className="Portfolio" ref="Portfolio" style={{ background: this.state.backgroundColor }}>
          <img src={this.state.arrowLeft2} className="prev" ref="prev2" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityLeft2 }} />
          <img src={this.state.arrowLeft} className="prev" ref="prev" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityLeft }}
               onClick={this.props.handleArrow(false)} />
          {/* <div className="squareLeft" ref="squareLeft" style={{ background: this.state.backgroundSquareLeft }} /> */}
          <div className="square" ref="square2" style={{ background: this.state.backgroundSquare2, opacity: this.state.opacitySquare2, bottom: this.state.bottomSquare,
                                                         left: this.state.leftSquare2, transition: this.state.transition, height: this.state.heightSquare2 }} />
          <div className="square" ref="square" style={{ background: this.state.backgroundSquare, opacity: this.state.opacitySquare, bottom: this.state.bottomSquare,
                                                        left: this.state.leftSquare, transition: this.state.transition, height: this.state.heightSquare }} />
          {/* <div className="squareRight" ref="squareRight" style={{ background: this.state.backgroundSquareRight }} /> */}
          <img src={this.state.arrowRight2} className="next" ref="next2" style={{ right: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityRight2 }} />
          <img src={this.state.arrowRight} className="next" ref="next" style={{ right: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityRight }}
               onClick={this.props.handleArrow(true)} />
          <div className="progressBarBackground" style={{ bottom: this.state.bottomProgress, width: this.state.widthProgress, background: this.state.progressBackground }}>
               <div className="progressBarForeground" style={{ width: ((this.props.page - 4) * 100 / 6) + '%', background: this.state.progressForeground }}></div>
          </div>
      </div>
    );
  }
}

export default Portfolio;
