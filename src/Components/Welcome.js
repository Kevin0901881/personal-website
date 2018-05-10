import React, { Component } from 'react';
import '../CSS/Welcome.css';
import Constants from './Constants.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'linear-gradient(to bottom, ' + Constants.PRIMARYCOLOR1 + ' 0%, rgba(255,0,0,0) ' + 81 + '%)',
      opacity: 0,
      scrollDownOpacity: 0,
      opacityBlock: 1,
      width: 0,
      height: 0,
      bottom: 0,
      transition: '',
      move: false
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.in();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  in() {
    setTimeout( function() {
      this.setState({ transition: '', width: this.refs.kevin.clientWidth, height: this.refs.kevin.clientHeight * 2,
                      bottom: (window.innerHeight - this.refs.kevin.clientHeight) / 2 - 2, opacityBlock: 1, opacity: 1 });
      this.setState({ transition: 'bottom 1s cubic-bezier(0.770, 0.000, 0.175, 1.000)', bottom: (window.innerHeight - 3 * this.refs.kevin.clientHeight) / 2 });
    }.bind(this), 350);
    setTimeout( function() {
      this.setState({ scrollDownOpacity: 1 });
    }.bind(this), 1250);
    setTimeout( function() {
      this.setState({ move: true, transition: 'bottom 0.1s linear' });
    }.bind(this), 1400);
  }

  out() {
    this.setState({ transition: 'bottom 1s cubic-bezier(0.770, 0.000, 0.175, 1.000)', bottom: (window.innerHeight - this.refs.kevin.clientHeight) / 2 - 2, move: false, scrollDownOpacity: 0 });
    setTimeout( function() {
      this.setState({ opacity: 0, opacityBlock: 0 });
    }.bind(this), 1000);
  }

  updateDimensions() {
    this.setState({ width: this.refs.kevin.clientWidth, height: this.refs.kevin.clientHeight * 2,
                    bottom: (window.innerHeight - 3 * this.refs.kevin.clientHeight) / 2 });
  }

  render() {
    return (
      <div className="Welcome" style={{ display: this.props.display }}
           onMouseMove={ this.state.move ? (e) => {this.setState({ bottom: (window.innerHeight - 3 * this.refs.kevin.clientHeight) / 2 + (e.clientY * 16 / window.innerHeight) })} : null }>
          <div className="kevin" ref="kevin" style={{ backgroundImage: this.state.background, opacity: this.state.opacity, color: Constants.PRIMARYCOLOR1 }}>
              KEVIN
          </div>
          <div className="darkBlock" style={{ width: this.state.width, height: this.state.height, bottom: this.state.bottom, transition: this.state.transition,
                                              opacity: this.state.opacity, background: 'linear-gradient(to top, #000000 50%, rgba(255,0,0,0) 100%)' }} />
          <div className="scrollDown" ref="scrollDown" style={{ opacity: this.state.scrollDownOpacity }}>
              SCROLL DOWN
          </div>
      </div>
    );
  }
}

export default Welcome;
