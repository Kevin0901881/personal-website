import React, { Component } from 'react';
import '../CSS/PortfolioItem.css';
import Constants from './Constants.js'
import leftArrow from '../Images/left_arrow.png'
import leftArrowDark from '../Images/left_arrow_dark.png'
import leftArrow2 from '../Images/left_arrow2.png'
import leftArrowDark2 from '../Images/left_arrow_dark2.png'
import leftArrow3 from '../Images/left_arrow3.png'
import leftArrowDark3 from '../Images/left_arrow_dark3.png'
import leftArrow4 from '../Images/left_arrow4.png'
import leftArrowDark4 from '../Images/left_arrow_dark4.png'
import leftArrow5 from '../Images/left_arrow5.png'
import leftArrowDark5 from '../Images/left_arrow_dark5.png'
import leftArrow6 from '../Images/left_arrow6.png'
import leftArrowDark6 from '../Images/left_arrow_dark6.png'
import leftArrow7 from '../Images/left_arrow7.png'
import leftArrowDark7 from '../Images/left_arrow_dark7.png'

class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemHeight: '',
      shiftArrow: 'translateX(0px)',
      arrowOpacity: '1',
      arrowOpacity2: '0',
      number: '01',
      year: '2018',
      title: 'ROCKET',
      description: 'Intelligent Chatbot',
      primaryColor: '',
      secondaryColor: '',
      tertieryColor: '',
      backColor: '',
      backOpacity: 0,
      headerOpacity: 0,
      headerTransform: 'translateY(60px)',
      numberOpacity: 0,
      numberTransform: 'translateY(60px)',
      numberPosition: 'fixed',
      numberTop: '0px',
      leftArrow: '',
      leftArrowDark: '',
      textOpacity: 0,
      gradientOpacity: 0,
      contentTransform: ''
    }
    this.out = this.out.bind(this);
    this.numberStateChange = this.numberStateChange.bind(this);
  }

  in() {
    this.setState({ primaryColor: this.props.primaryColor, secondaryColor: this.props.secondaryColor, tertieryColor: this.props.tertieryColor,
                    backColor: this.props.primaryColor, gradientOpacity: 1, numberTop: (window.innerHeight - this.props.dimens) / 2 + 'px' });
    switch (this.props.page) {
      case 4:
        this.setState({ leftArrow: leftArrow, leftArrowDark: leftArrowDark });
        break;
      case 5:
        this.setState({ leftArrow: leftArrow2, leftArrowDark: leftArrowDark2 });
        break;
      case 6:
        this.setState({ leftArrow: leftArrow3, leftArrowDark: leftArrowDark3 });
        break;
      case 7:
        this.setState({ leftArrow: leftArrow4, leftArrowDark: leftArrowDark4 });
        break;
      case 8:
        this.setState({ leftArrow: leftArrow5, leftArrowDark: leftArrowDark5 });
        break;
      case 9:
        this.setState({ leftArrow: leftArrow6, leftArrowDark: leftArrowDark6 });
        break;
      case 10:
        this.setState({ leftArrow: leftArrow7, leftArrowDark: leftArrowDark7 });
        break;
    }
    setTimeout( function() {
      this.setState({ backOpacity: 1, portfolioItemHeight: this.refs.portfolioContent.clientHeight + window.innerHeight / 2 + 100 + 'px' });
    }.bind(this), 50);
    setTimeout( function() {
      this.setState({ headerOpacity: 1, headerTransform: 'translateY(0px)' });
    }.bind(this), 200);
    setTimeout( function() {
      this.setState({ numberOpacity: 1, numberTransform: 'translateY(0px)' });
    }.bind(this), 350);
    setTimeout( function() {
      this.setState({ textOpacity: 1 });
    }.bind(this), 500);
  }

  out() {
    if (this.props.scrollbarHeight == 0) {
      this.props.itemOut();
      this.setState({ backOpacity: 0, textOpacity: 0 });
      setTimeout( function() {
        this.setState({ headerOpacity: 0, headerTransform: 'translateY(60px)' });
      }.bind(this), 200);
      setTimeout( function() {
        this.setState({ numberOpacity: 0, numberTransform: 'translateY(60px)', gradientOpacity: 0 });
      }.bind(this), 350);
    } else {
      this.props.scrollTop(true);
      this.setState({ backOpacity: 0 });
      this.props.itemOut();
      this.setState({ textOpacity: 0 });
      setTimeout( function() {
        this.setState({ headerOpacity: 0, headerTransform: 'translateY(60px)' });
      }.bind(this), 100);
      setTimeout( function() {
        this.setState({ numberOpacity: 0, numberTransform: 'translateY(60px)' });
      }.bind(this), 250);
      setTimeout( function() {
        this.setState({ gradientOpacity: 0 });
      }.bind(this), 550);
    }
  }

  hoverOn() {
    this.setState({ backColor: this.props.secondaryColor });
  }

  hoverOff() {
    this.setState({ backColor: this.props.primaryColor });
  }

  numberStateChange(fixed) {
    if (fixed) {
      this.setState({ numberPosition: 'fixed', numberTop: (window.innerHeight - this.props.dimens) / 2 + 'px' });
    } else {
      this.setState({ numberPosition: 'absolute', numberTop: window.innerHeight / 2 + this.props.margin + 'px' });
    }
  }

  render() {
    return (
      <div className="PortfolioItem" style={{ height: this.state.portfolioItemHeight }}>
          <div className="backPortfolio" onMouseEnter={() => { this.setState({ shiftArrow: 'translateX(-8px)', arrowOpacity: '0', arrowOpacity2: '1' }); this.hoverOn(); }}
               onMouseLeave={() => { this.setState({ shiftArrow: 'translateX(0px)', arrowOpacity: '1', arrowOpacity2: '0' }); this.hoverOff(); }}
               onClick={() => { this.out() }} style={{ color: this.state.backColor, opacity: this.state.backOpacity }} ref="back">
              <img src={this.state.leftArrow} className="leftArrow" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity }} />
              <img src={this.state.leftArrowDark} className="leftArrowDark" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity2 }} />
              BACK
          </div>
          <div className="portfolioContent" style={{ top: window.innerHeight / 2 + this.props.margin + 'px', width: this.props.dimens * 2 + 'px', transform: this.state.contentTransform }} ref="portfolioContent">
            <div className="portfolioHeader" ref="header" style={{ opacity: this.state.headerOpacity, transform: this.state.headerTransform }}>
              <div className="portfolioYear" ref="year" style={{ color: this.state.secondaryColor }}>{this.state.year}</div>
              <div className="portfolioTitle" style={{ color: this.state.primaryColor }}>{this.state.title}</div>
              <div className="portfolioDescription" style={{ color: this.state.primaryColor }}>{this.state.description}</div>
            </div>
            <div className="portfolioText" style={{ color: this.state.primaryColor, top: this.props.topText,
                                                    marginTop: (window.innerHeight - this.props.dimens) / 2 + 'px', opacity: this.state.textOpacity }} ref="portfolioText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est.
            </div>
          </div>
          <div className="portfolioNumber" ref="number" style={{ left: (window.innerWidth + this.props.dimens) / 2 + 20 + 'px', top: this.state.numberTop,
                                                                 color: this.state.primaryColor, opacity: this.state.numberOpacity, transform: this.state.numberTransform,
                                                                 position: this.state.numberPosition }}>
            {this.state.number}
          </div>
          <div className="portfolioGradientTop" style={{ height: (window.innerHeight - this.props.dimens) / 2 + 'px',
                                                         background: 'linear-gradient(to top, rgba(255,0,0,0) 0%, ' + this.props.tertieryColor + ' 100%)',
                                                         opacity: this.state.gradientOpacity }} />
          <div className="portfolioGradientBottom" style={{ height: (window.innerHeight - this.props.dimens) / 2 + 'px',
                                                            background: 'linear-gradient(to bottom, rgba(255,0,0,0) 0%, ' + this.props.tertieryColor + ' 100%)',
                                                            opacity: this.state.gradientOpacity }} />
      </div>
    );
  }
}

export default PortfolioItem;
