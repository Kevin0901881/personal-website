import React, { Component } from 'react';
import './App.css';
import Logo from './Components/Logo.js';
import Menu from './Components/Menu.js';
import Welcome from './Components/Welcome.js';
import About from './Components/About.js';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';

class App extends Component {
  constructor() {
    super();

    this.scrollNext = 0;
    this.scrollPrev = 0;
    this.scrollNext2 = 0;
    this.scrollPrev2 = 0;
    this.currentTime = 0;
    this.state = {
      page: 4,
      currentPage: 4,
      portfolioPage: 4,
      displayContact: 'none'
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleArrow = this.handleScroll.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#000000';
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll);
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
    window.removeEventListener("wheel", this.handleScroll);
  }

  handleScroll(e) {
    if (e.deltaY < 0 && this.state.page >= 5 && this.state.page <= 10) { // scroll up (prev)
      this.setState({ page: this.state.page - 1 });
      this.scrollPrev++;
      if (this.scrollPrev > 1) {
        setTimeout( function() {
          this.scrollPrev--;
          this.currentTime = Date.now();
          this.setState({ currentPage: this.state.currentPage - 1, portfolioPage: this.state.portfolioPage - 1 });
          this.refs.portfolio.updateScene(false);
          this.refs.menu.updateMenu(false);
          this.refs.logo.updateLogo(false);
        }.bind(this), 200 * (this.scrollPrev - 1) - (Date.now() - this.currentTime));
      } else {
        this.currentTime = Date.now();
        this.setState({ currentPage: this.state.currentPage - 1, portfolioPage: this.state.portfolioPage - 1 });
        this.refs.portfolio.updateScene(false);
        this.refs.menu.updateMenu(false);
        this.refs.logo.updateLogo(false);
        setTimeout( function() {
          this.scrollPrev--;
        }.bind(this), 200);
      }
    } else if (e.deltaY > 0 && this.state.page >= 4 && this.state.page <= 9) { // scroll down (next)
      this.setState({ page: this.state.page + 1 });
      this.scrollNext++;
      if (this.scrollNext > 1) {
        setTimeout( function() {
          this.scrollNext--;
          this.currentTime = Date.now();
          this.setState({ currentPage: this.state.currentPage + 1, portfolioPage: this.state.portfolioPage + 1 });
          this.refs.portfolio.updateScene(true);
          this.refs.menu.updateMenu(true);
          this.refs.logo.updateLogo(true);
        }.bind(this), 200 * (this.scrollNext - 1) - (Date.now() - this.currentTime));
      } else {
        this.currentTime = Date.now();
        this.setState({ currentPage: this.state.currentPage + 1, portfolioPage: this.state.portfolioPage + 1 });
        this.refs.portfolio.updateScene(true);
        this.refs.menu.updateMenu(true);
        this.refs.logo.updateLogo(true);
        setTimeout( function() {
          this.scrollNext--;
        }.bind(this), 200);
      }
    } else if (e.deltaY < 0 && this.state.currentPage == 11 && this.scrollPrev2 == 0) {
      this.scrollPrev2 = 1;
      this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1 });
      this.refs.menu.updateMenu(false);
      this.refs.contact.out();
      setTimeout( function() {
        this.scrollPrev2 = 0;
        this.setState({ displayContact: 'none' });
      }.bind(this), 400);
    } else if (e.deltaY > 0 && this.state.currentPage == 10 && this.scrollNext2 == 0) {
      this.scrollNext2 = 1;
      this.setState({ page: this.state.page + 1, displayContact: 'block' });
      this.refs.menu.updateMenu(true);
      this.refs.contact.in();
      setTimeout( function() {
        this.scrollNext2 = 0;
        this.setState({ currentPage: this.state.currentPage + 1 });
      }.bind(this), 400);
    }
  }

  // handleArrow(next) {
  //   console.log("me");
  //   if (next && this.state.page >= 5) { // scroll up (prev)
  //     this.scrollPrev++;
  //     if (this.scrollPrev > 1) {
  //       setTimeout( function() {
  //         this.scrollPrev--;
  //         this.currentTime = Date.now();
  //         this.setState({ currentPage: this.state.currentPage - 1 });
  //         this.refs.portfolio.updateScene(false);
  //         this.refs.menu.updateMenu();
  //         this.refs.logo.updateLogo(false);
  //       }.bind(this), 200 * (this.scrollPrev - 1) - (Date.now() - this.currentTime));
  //     } else {
  //       this.currentTime = Date.now();
  //       this.setState({ currentPage: this.state.currentPage - 1 });
  //       this.refs.portfolio.updateScene(false);
  //       this.refs.menu.updateMenu();
  //       this.refs.logo.updateLogo(false);
  //       setTimeout( function() {
  //         this.scrollPrev--;
  //       }.bind(this), 200);
  //     }
  //     this.setState({ page: this.state.page - 1 });
  //   }
  //   if (this.state.page <= 9) { // scroll down (next)
  //     this.scrollNext++;
  //     if (this.scrollNext > 1) {
  //       setTimeout( function() {
  //         this.scrollNext--;
  //         this.currentTime = Date.now();
  //         this.setState({ currentPage: this.state.currentPage + 1 });
  //         this.refs.portfolio.updateScene(true);
  //         this.refs.menu.updateMenu();
  //         this.refs.logo.updateLogo(true);
  //       }.bind(this), 200 * (this.scrollNext - 1) - (Date.now() - this.currentTime));
  //     } else {
  //       this.currentTime = Date.now();
  //       this.setState({ currentPage: this.state.currentPage + 1 });
  //       this.refs.portfolio.updateScene(true);
  //       this.refs.menu.updateMenu();
  //       this.refs.logo.updateLogo(true);
  //       setTimeout( function() {
  //         this.scrollNext--;
  //       }.bind(this), 200);
  //     }
  //     this.setState({ page: this.state.page + 1 });
  //   }
  // }

  render() {
    return (
      <div className="App">
          <Logo className="logo" page={this.state.currentPage} ref="logo" />
          {/* <Welcome /> */}
          {/* <About height={ window.innerHeight } width={ window.innerWidth } /> */}
          <Portfolio className="portfolio" page={this.state.page} currentPage={this.state.portfolioPage} ref="portfolio" />
          <Contact className="contact" ref="contact" style={{ display: this.state.displayContact }} />
          <Menu className="menu" page={this.state.page} currentPage={this.state.currentPage} ref="menu" />
      </div>
    );
  }
}

export default App;
