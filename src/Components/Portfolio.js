import React, { Component } from 'react';
import '../CSS/Portfolio.css';
import Constants from './Constants.js'
import Scrollbar from './Scrollbar.js'
import PortfolioItem from './PortfolioItem.js'
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

    this.dimens = 0;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.itemEnabled = false;
    this.margin = 0;
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
      widthProgress: '',
      progressBackground: Constants.SECONDARYCOLOR1,
      progressForeground: Constants.PRIMARYCOLOR4,
      backgroundColor: Constants.TERTIERYCOLOR1,
      cursorSquare: 'pointer',
      backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR4 + ' 0%, rgba(255,0,0,0) 100%)',
      backgroundSquare2: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR5 + ' 0%, rgba(255,0,0,0) 100%)',
      opacitySquare: 0,
      opacitySquare2: 0,
      bottomSquare: '',
      leftSquare: '',
      leftSquare2: '',
      transition: '',
      heightSquare: '0px',
      heightSquare2: '0px',
      opacityProgress: 0,
      opacityScrollbar: 0,
      foregroundHeight: 0,
      displayPortfolioItem: 'none'
    }
    this.updateDimensions = this.updateDimensions.bind(this);
    this.itemOut = this.itemOut.bind(this);
    this.toTop = this.toTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  in() {
    this.dimens = this.refs.square.clientWidth;
    this.margin = 0.22 * this.dimens;
    this.updateDimensions();
    this.setState({ opacitySquare: 0, transition: '', heightSquare: '0px', heightSquare2: '0px',
                    leftArrow: (this.width - this.dimens) / 4 - 0.5 * this.refs.prev.clientWidth,
                    bottomArrow: 0.5 * (this.height - this.refs.prev.clientHeight),
                    bottomProgress: (this.height - this.dimens) / 4,
                    widthProgress: 0.5 * this.dimens,
                    bottomSquare: 0.5 * (this.height - this.dimens) });
    setTimeout( function() {
      this.setState({ transition: 'opacity 0.6s linear, height 1s cubic-bezier(0.770, 0.000, 0.175, 1.000)', opacitySquare: 1,
                      bottomSquare: 0.5 * (this.height - this.dimens) + 'px', bottomProgress: (this.height - this.dimens) / 4,
                      leftSquare: 0.5 * this.width, leftSquare2: 0.5 * this.width + this.dimens, heightSquare: this.dimens + 'px' });
    }.bind(this), 450);
    setTimeout( function() {
      this.setState({ arrowOpacityRight: 1, opacityProgress: 1 });
    }.bind(this), 800);
  }

  out() {
    this.setState({ transition: 'opacity 0.6s linear, height 1s cubic-bezier(0.770, 0.000, 0.175, 1.000)', opacitySquare: 0,
                    heightSquare: '0px', arrowOpacityRight: 0, opacityProgress: 0 });
  }

  updateScene(next) {
    if (next) {
      switch (this.props.currentPage) {
        case 4:
          this.setState({ progressBackground: Constants.SECONDARYCOLOR1, progressForeground: Constants.PRIMARYCOLOR4, backgroundColor: Constants.TERTIERYCOLOR1 });
          break;
        case 5:
          this.setState({ transition: '', leftSquare2: 0.5 * this.width + this.dimens });
          this.setState({ arrowLeft: left1, arrowRight: right1, arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * this.width - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR5 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR5, progressForeground: Constants.PRIMARYCOLOR5, backgroundColor: Constants.TERTIERYCOLOR5 });
          break;
        case 6:
          this.setState({ transition: '', leftSquare: 0.5 * this.width + this.dimens });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * this.width, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * this.width - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR6 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR6, progressForeground: Constants.PRIMARYCOLOR6, backgroundColor: Constants.TERTIERYCOLOR6 });
          break;
        case 7:
          this.setState({ transition: '', leftSquare2: 0.5 * this.width + this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * this.width - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR7 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR7, progressForeground: Constants.PRIMARYCOLOR7, backgroundColor: Constants.TERTIERYCOLOR7 });
          break;
        case 8:
          this.setState({ transition: '', leftSquare: 0.5 * this.width + this.dimens });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * this.width, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * this.width - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR8 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR8, progressForeground: Constants.PRIMARYCOLOR8, backgroundColor: Constants.TERTIERYCOLOR8 });
          break;
        case 9:
          this.setState({ transition: '', leftSquare2: 0.5 * this.width + this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * this.width - this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR9 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR9, progressForeground: Constants.PRIMARYCOLOR9, backgroundColor: Constants.TERTIERYCOLOR9 });
          break;
        case 10:
          this.setState({ transition: '', leftSquare: 0.5 * this.width + this.dimens });
          this.setState({ arrowLeft: left7, arrowRight: right7, arrowOpacityLeft: 1, arrowOpacityRight: 0, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * this.width, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * this.width - this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR10 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR10, progressForeground: Constants.PRIMARYCOLOR10, backgroundColor: Constants.TERTIERYCOLOR10 });
          break;
      }
    } else {
      switch (this.props.currentPage) {
        case 4:
          this.setState({ transition: '', leftSquare: 0.5 * this.width - this.dimens });
          this.setState({ arrowLeft: left1, arrowRight: right1, arrowOpacityLeft: 0, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * this.width, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * this.width + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR4 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR1, progressForeground: Constants.PRIMARYCOLOR4, backgroundColor: Constants.TERTIERYCOLOR1 });
          break;
        case 5:
          this.setState({ transition: '', leftSquare2: 0.5 * this.width - this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left2, arrowRight2: right2, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * this.width + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR5 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR5, progressForeground: Constants.PRIMARYCOLOR5, backgroundColor: Constants.TERTIERYCOLOR5 });
          break;
        case 6:
          this.setState({ transition: '', leftSquare: 0.5 * this.width - this.dimens });
          this.setState({ arrowLeft: left3, arrowRight: right3, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * this.width, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * this.width + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR6 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR6, progressForeground: Constants.PRIMARYCOLOR6, backgroundColor: Constants.TERTIERYCOLOR6 });
          break;
        case 7:
          this.setState({ transition: '', leftSquare2: 0.5 * this.width - this.refs.square2.clientWidth });
          this.setState({ arrowLeft2: left4, arrowRight2: right4, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * this.width + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens,
                          backgroundSquare2: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR7 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR7, progressForeground: Constants.PRIMARYCOLOR7, backgroundColor: Constants.TERTIERYCOLOR7 });
          break;
        case 8:
          this.setState({ transition: '', leftSquare: 0.5 * this.width - this.dimens });
          this.setState({ arrowLeft: left5, arrowRight: right5, arrowOpacityLeft: 1, arrowOpacityRight: 1, arrowOpacityLeft2: 0, arrowOpacityRight2: 0,
                          opacitySquare: 1, leftSquare: 0.5 * this.width, heightSquare: this.dimens,
                          opacitySquare2: 0, leftSquare2: 0.5 * this.width + this.refs.square2.clientWidth, heightSquare2: 0,
                          backgroundSquare: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR8 + ' 0%, rgba(255,0,0,0) 100%)',
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR8, progressForeground: Constants.PRIMARYCOLOR8, backgroundColor: Constants.TERTIERYCOLOR8 });
          break;
        case 9:
          this.setState({ transition: '', leftSquare2: 0.5 * this.width - this.dimens });
          this.setState({ arrowLeft2: left6, arrowRight2: right6, arrowOpacityLeft: 0, arrowOpacityRight: 0, arrowOpacityLeft2: 1, arrowOpacityRight2: 1,
                          opacitySquare: 0, leftSquare: 0.5 * this.width + this.refs.square2.clientWidth, heightSquare: 0,
                          opacitySquare2: 1, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens,
                          transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                          progressBackground: Constants.SECONDARYCOLOR9, progressForeground: Constants.PRIMARYCOLOR9, backgroundColor: Constants.TERTIERYCOLOR9 });
          break;
        case 10:
          this.setState({ progressBackground: Constants.SECONDARYCOLOR9, progressForeground: Constants.PRIMARYCOLOR9, backgroundColor: Constants.TERTIERYCOLOR9 });
          break;
      }
    }
  }

  updateDimensions() {
    this.dimens = this.refs.square.clientWidth;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.setState({ leftArrow: (this.width - this.dimens) / 4 - 0.5 * this.refs.prev.clientWidth,
       bottomArrow: 0.5 * (this.height - this.refs.prev.clientHeight),
       bottomProgress: (this.height - this.dimens) / 4,
       widthProgress: 0.5 * this.dimens,
       bottomSquare: 0.5 * (this.height - this.dimens) });
    if (this.props.currentPage == 4 || this.props.currentPage == 6 || this.props.currentPage == 8 || this.props.currentPage == 10 ) {
      this.setState({ leftSquare: 0.5 * this.width, leftSquare2: 0.5 * this.width + this.dimens, heightSquare: this.dimens + 'px' });
    } else {
      this.setState({ leftSquare: 0.5 * this.width + this.dimens, leftSquare2: 0.5 * this.width, heightSquare2: this.dimens + 'px' });
    }
  }

  itemIn() {
    this.itemEnabled = true;
    this.setState({ arrowOpacityLeft: 0, arrowOpacityLeft2: 0, arrowOpacityRight: 0, arrowOpacityRight2: 0, opacityProgress: 0, displayPortfolioItem: 'block',
                    cursorSquare: 'default' });
    this.refs.portfolioItem.in();
    this.props.activatePortfolioItem();
    setTimeout( function() {
      this.setState({ opacityScrollbar: 1 });
    }.bind(this), 50);
  }

  itemOut() {
    this.setState({ opacityScrollbar: 0 });
    setTimeout( function() {
      switch (this.props.page) {
        case 4:
          this.setState({ arrowOpacityRight: 1, opacityProgress: 1 });
          break;
        case 5:
          this.setState({ arrowOpacityLeft2: 1, arrowOpacityRight2: 1, opacityProgress: 1 });
          break;
        case 6:
          this.setState({ arrowOpacityLeft: 1, arrowOpacityRight: 1, opacityProgress: 1 });
          break;
        case 7:
          this.setState({ arrowOpacityLeft2: 1, arrowOpacityRight2: 1, opacityProgress: 1 });
          break;
        case 8:
          this.setState({ arrowOpacityLeft: 1, arrowOpacityRight: 1, opacityProgress: 1 });
          break;
        case 9:
          this.setState({ arrowOpacityLeft2: 1, arrowOpacityRight2: 1, opacityProgress: 1 });
          break;
        case 10:
          this.setState({ arrowOpacityLeft: 1, opacityProgress: 1 });
          break;
      }
    }.bind(this), 550);
    setTimeout( function() {
      this.setState({ displayPortfolioItem: 'none', cursorSquare: 'pointer' });
      this.itemEnabled = false;
      this.props.activatePortfolioItem();
    }.bind(this), 650);
  }

  scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

        Math.easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
        	if (t < 1) return c / 2 * t * t + b;
        	t--;
        	return -c / 2 * (t * (t - 2) - 1) + b;
        };

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
  }

  toTop() {
    this.scrollTo(this.refs.Portfolio, 0, 250);
  }

  handleScroll() {
    var scrollTop = this.refs.Portfolio.scrollTop;
    this.setState({ opacitySquare: 1 - scrollTop / 500, opacitySquare2: 1 - scrollTop / 500,
                    foregroundHeight: scrollTop / (this.refs.Portfolio.scrollHeight - this.refs.Portfolio.clientHeight) * (this.dimens / 2) });
    if (scrollTop >= this.dimens / 2 + this.margin) {
      this.refs.portfolioItem.numberStateChange(false);
    } else {
      this.refs.portfolioItem.numberStateChange(true);
    }
  }

  render() {
    return (
      <div className="Portfolio" ref="Portfolio" style={{ background: this.state.backgroundColor, display: this.props.display }} onScroll={(e) => { this.handleScroll() }}>
          <div className="portfolioItem" style={{ display: this.state.displayPortfolioItem }}>
            <PortfolioItem primaryColor={this.state.progressForeground} secondaryColor={this.state.progressBackground}
                           tertieryColor={this.state.backgroundColor} scrollbarHeight={this.state.foregroundHeight} scrollTop={this.toTop}
                           itemOut={this.itemOut} page={this.props.page} topText={this.height - (this.height - this.dimens) / 2}
                           dimens={this.dimens} margin={this.margin}
                           ref="portfolioItem" />
          </div>
          <div className="scrollbar" style={{ opacity: this.state.opacityScrollbar }}>
            <Scrollbar background={this.state.progressBackground} foregroundHeight={this.state.foregroundHeight} foregroundBackground={this.state.progressForeground} dimens={this.dimens} />
          </div>
          <img src={this.state.arrowLeft2} className="prev" ref="prev2" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityLeft2 }} />
          <img src={this.state.arrowLeft} className="prev" ref="prev" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow, opacity: this.state.arrowOpacityLeft }} />
          {/* <div className="squareLeft" ref="squareLeft" style={{ background: this.state.backgroundSquareLeft }} /> */}
          <div className="square" ref="square2" style={{ background: this.state.backgroundSquare2, opacity: this.state.opacitySquare2, bottom: this.state.bottomSquare,
                                                         left: this.state.leftSquare2, transition: this.state.transition, height: this.state.heightSquare2,
                                                         cursor: this.state.cursorSquare }}
               onClick={() => { if (!this.itemEnabled) this.itemIn() }}
               onMouseEnter={() => { this.setState({ transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)', opacitySquare2: 0.5 }) }}
               onMouseLeave={() => { this.setState({ opacitySquare2: 1 }) }} />
          <div className="square" ref="square" style={{ background: this.state.backgroundSquare, opacity: this.state.opacitySquare, bottom: this.state.bottomSquare,
                                                        left: this.state.leftSquare, transition: this.state.transition, height: this.state.heightSquare,
                                                        cursor: this.state.cursorSquare }}
               onClick={() => { if (!this.itemEnabled) this.itemIn() }}
               onMouseEnter={() => { this.setState({ transition: 'opacity 0.4s ease-in-out, left 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000), height 0.4s cubic-bezier(0.770, 0.000, 0.175, 1.000)', opacitySquare: 0.5 }) }}
               onMouseLeave={() => { this.setState({ opacitySquare: 1 }) }} />
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
