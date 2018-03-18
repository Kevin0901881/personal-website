import React, { Component } from 'react';
import '../CSS/Portfolio.css';
import left1 from '../Images/portfolio1_left.png';
import right1 from '../Images/portfolio1_right.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      leftArrow: '',
      bottomArrow: '',
      bottomProgress: '',
      progressWidth: '',
      progressBackground: '#1b1b1b',
      progressForeground: '#ffffff'
    }
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    if (e.deltaY < 0 && this.state.page >= 1) { // scroll up
      this.setState({ page: this.state.page - 1 });
    }
    if (e.deltaY > 0 && this.state.page <= 5) { // scroll down
      this.setState({ page: this.state.page + 1 });
    }
  }

  updateDimensions() {
    this.setState({ leftArrow: (window.innerWidth - this.refs.square.clientWidth) / 4 - (this.refs.prev.clientWidth / 2),
       bottomArrow: (window.innerHeight / 2) - (this.refs.prev.clientHeight / 2),
       bottomProgress: (window.innerHeight - this.refs.square.clientHeight) / 4,
       widthProgress: this.refs.square.clientWidth / 2 });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("wheel", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("wheel", this.handleScroll);
  }

  render() {
    return (
      <div className="Portfolio" style={{ background: '#000000' }}>
          <img src={left1} className="prev" ref="prev" style={{ left: this.state.leftArrow, bottom: this.state.bottomArrow }} />
          <div className="square" ref="square" />
          <img src={right1} className="next" ref="next" style={{ right: this.state.leftArrow, bottom: this.state.bottomArrow }} />
          <div className="progressBarBackground" style={{ bottom: this.state.bottomProgress, width: this.state.widthProgress, background: this.state.progressBackground }}>
               <div className="progressBarForeground" style={{ width: (this.state.page * 100 / 6) + '%', background: this.state.progressForeground }}></div>
          </div>
      </div>
    );
  }
}

export default Portfolio;
