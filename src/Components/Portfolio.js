import React, { Component } from 'react';
import '../CSS/Portfolio.css';
import left1 from '../Images/portfolio1_left.png';
import right1 from '../Images/portfolio1_right.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.page, // target page
      currentPage: this.props.currentPage,
      leftArrow: '',
      bottomArrow: '',
      bottomProgress: '',
      progressWidth: '',
      progressBackground: '#1b1b1b',
      progressForeground: '#ffffff',
      backgroundColor: '#000000',
      backgroundSquare: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,0,0,0) 100%)'
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updatePage() {
    this.setState({ page: this.props.page });
  }

  updateScene() {
    this.setState({ currentPage: this.props.currentPage });
    this.changeBackground();
    this.changeProgressForeground();
    this.changeProgressBackground();
  }

  changeBackground() {
    switch (this.state.currentPage) {
      case 5:
        this.setState({ backgroundColor: '#000000' });
        break;
      case 6:
        this.setState({ backgroundColor: '#e3395e' });
        break;
      case 7:
        this.setState({ backgroundColor: '#e0e0e0' });
        break;
      case 8:
        this.setState({ backgroundColor: '#cb1931' });
        break;
      case 9:
        this.setState({ backgroundColor: '#15bf50' });
        break;
      case 10:
        this.setState({ backgroundColor: '#7b3947' });
        break;
      case 11:
        this.setState({ backgroundColor: '#0336a1' });
        break;
    }
  }

  changeProgressForeground() {
    switch (this.state.currentPage) {
      case 5:
        this.setState({ progressForeground: '#ffffff' });
        break;
      case 6:
        this.setState({ progressForeground: '#04307b' });
        break;
      case 7:
        this.setState({ progressForeground: '#321914' });
        break;
      case 8:
        this.setState({ progressForeground: '#e7bc53' });
        break;
      case 9:
        this.setState({ progressForeground: '#000000' });
        break;
      case 10:
        this.setState({ progressForeground: '#e4e4f0' });
        break;
      case 11:
        this.setState({ progressForeground: '#faad55' });
        break;
    }
  }

  changeProgressBackground() {
    switch (this.state.currentPage) {
      case 5:
        this.setState({ progressBackground: '#1b1b1b' });
        break;
      case 6:
        this.setState({ progressBackground: '#b52948' });
        break;
      case 7:
        this.setState({ progressBackground: '#b5b5b5' });
        break;
      case 8:
        this.setState({ progressBackground: '#a2192a' });
        break;
      case 9:
        this.setState({ progressBackground: '#118f3d' });
        break;
      case 10:
        this.setState({ progressBackground: '#572933' });
        break;
      case 11:
        this.setState({ progressBackground: '#012165' });
        break;
    }
  }

  updateDimensions() {
    this.setState({ leftArrow: (window.innerWidth - this.refs.square.clientWidth) / 4 - (this.refs.prev.clientWidth / 2),
       bottomArrow: (window.innerHeight / 2) - (this.refs.prev.clientHeight / 2),
       bottomProgress: (window.innerHeight - this.refs.square.clientHeight) / 4,
       widthProgress: this.refs.square.clientWidth / 2 });
  }

  render() {
    return (
      <div className="Portfolio" ref="Portfolio" style={{ background: this.state.backgroundColor }}>
          <img src={left1} className="prev" ref="prev" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow }} />
          {/* <div className="squareLeft" ref="squareLeft" style={{ background: this.state.backgroundSquareLeft }} /> */}
          <div className="square" ref="square" style={{ background: this.state.backgroundSquare }} />
          {/* <div className="squareRight" ref="squareRight" style={{ background: this.state.backgroundSquareRight }} /> */}
          <img src={right1} className="next" ref="next" style={{ right: this.state.leftArrow, bottom: this.state.bottomArrow }} />
          <div className="progressBarBackground" style={{ bottom: this.state.bottomProgress, width: this.state.widthProgress, background: this.state.progressBackground }}>
               <div className="progressBarForeground" style={{ width: ((this.state.page - 5) * 100 / 6) + '%', background: this.state.progressForeground }}></div>
          </div>
      </div>
    );
  }
}

export default Portfolio;
