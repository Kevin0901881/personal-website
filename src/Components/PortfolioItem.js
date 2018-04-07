import React, { Component } from 'react';
import '../CSS/PortfolioItem.css';
import Constants from './Constants.js'
import leftArrow from '../Images/left_arrow.png'
import leftArrowDark from '../Images/left_arrow_dark.png'

class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.dimens = Constants.CENTER_SHAPE_DIMENS;
    this.state = {
      shiftArrow: 'translateX(0px)',
      arrowOpacity: '0',
      number: '01',
      year: '2018',
      title: 'ROCKET',
      description: 'Intelligent Chatbot',
      secondaryColor: '#808080',
      primaryColor: '#ffffff',
      backOpacity: 0,
      contentOpacity: 0,
      contentTransform: 'translate(-50%, 40px)',
      numberOpacity: 0,
      numberTransform: 'translateY(40px)'
    }
  }

  in() {
    setTimeout( function() {
      this.setState({ numberOpacity: 1, numberTransform: 'translateY(0px)' });
    }.bind(this), 200);
    setTimeout( function() {
      this.setState({ contentOpacity: 1, contentTransform: 'translate(-50%, 0px)' });
    }.bind(this), 350);
    setTimeout( function() {
      this.setState({ backOpacity: 1 });
    }.bind(this), 800);
  }

  out() {
    if (this.props.scrollbarHeight == 0) {
      this.setState({ backOpacity: 0 });
      setTimeout( function() {
        this.setState({ contentOpacity: 0, contentTransform: 'translate(-50%, 40px)' });
      }.bind(this), 100);
      setTimeout( function() {
        this.setState({ numberOpacity: 0, numberTransform: 'translateY(40px)' });
      }.bind(this), 300);
    } else { // TODO: FINISH THIS

    }
  }

  render() {
    return (
      <div className="PortfolioItem">
          <div className="backPortfolio" onMouseEnter={() => { this.setState({ shiftArrow: 'translateX(-8px)', arrowOpacity: '1' }) }}
               onMouseLeave={() => { this.setState({ shiftArrow: 'translateX(0px)', arrowOpacity: '0' }) }}
               onClick={() => {  }}
               style={{ color: this.props.color, opacity: this.state.backOpacity }} ref="back">
              <img src={leftArrow} className="leftArrow" style={{ transform: this.state.shiftArrow }} />
              <img src={leftArrowDark} className="leftArrowDark" style={{ transform: this.state.shiftArrow, opacity: this.state.arrowOpacity }} />
              BACK
          </div>
          <div className="portfolioContent" ref="content" style={{ width: this.dimens * 2 + 'px', marginTop: window.innerHeight / 2 + 100 + 'px',
                                                                   opacity: this.state.contentOpacity, transform: this.state.contentTransform }}>
            <div className="portfolioYear" style={{ color: this.state.secondaryColor }}>{this.state.year}</div>
            <div className="portfolioTitle" style={{ color: this.state.primaryColor }}>{this.state.title}</div>
            <div className="portfolioDescription" style={{ color: this.state.primaryColor }}>{this.state.description}</div>
          </div>
          <div className="portfolioNumber" ref="number" style={{ left: (window.innerWidth + this.dimens) / 2 + 20 + 'px', top: (window.innerHeight - this.dimens) / 2 + 'px',
                                                                 color: this.state.primaryColor, opacity: this.state.numberOpacity, transform: this.state.numberTransform }}>
            {this.state.number}
          </div>
      </div>
    );
  }
}

export default PortfolioItem;
