import React, { Component } from 'react';
import './App.css';
import Loader from './Components/Loader.js';
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
    this.scroll2 = 0;
    this.currentTime = 0;
    this.enableScroll = false;
    this.state = {
      page: 1,
      currentPage: 1,
      portfolioPage: 4,
      displayWelcome: 'block',
      displayAbout: 'none',
      displayPortfolio: 'none',
      displayContact: 'none',
      resumeActivated: false,
      portfolioItemActivated: false,
      loading: true,
      scrollDownOpacity: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.activateResume = this.activateResume.bind(this);
    this.activatePortfolioItem = this.activatePortfolioItem.bind(this);
    // this.handleArrow = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log(window.innerHeight);
    window.addEventListener("wheel", this.handleScroll);

    setTimeout( function() {
      this.refs.loader.out();
    }.bind(this), 3350);

    setTimeout( function() {
      this.setState({ loading: false });
    }.bind(this), 3500);

    setTimeout( function() {
      this.setState({ scrollDownOpacity: 1 });
      this.enableScroll = true;
    }.bind(this), 5000);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  handleScroll(e) {
    if (e.deltaY < 0 && !this.state.portfolioItemActivated && !this.state.resumeActivated) { // scroll up (prev)
      if (this.state.page == 2 && this.scroll2 == 0) {
        this.scroll2 = 1;
        this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1, displayWelcome: 'block' });
        this.refs.menu.updateMenu(false);
        this.refs.about.page1out();
        this.refs.welcome.in();
        this.refs.logo.updateLogo(false);
        setTimeout( function() {
          this.scroll2 = 0;
          this.setState({ displayAbout: 'none' });
        }.bind(this), 1450);
      } else if (this.state.page == 3 && this.scroll2 == 0) {
        this.scroll2 = 1;
        this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1 });
        this.refs.about.page1inPage2out();
        setTimeout( function() {
          this.scroll2 = 0;
        }.bind(this), 1100);
      } else if (this.state.page == 4 && this.scroll2 == 0 && this.scrollPrev == 0) {
        this.scroll2 = 1;
        this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1, displayAbout: 'block', scrollDownOpacity: 1 });
        this.refs.menu.updateMenu(false);
        this.refs.about.page2in();
        this.refs.portfolio.out();
        this.refs.logo.updateLogo(false);
        setTimeout( function() {
          this.scroll2 = 0;
          this.setState({ displayPortfolio: 'none' });
        }.bind(this), 1100);
      } else if (this.state.page >= 5 && this.state.page <= 10 && this.scroll2 == 0 && this.scrollNext == 0 && this.scrollPrev == 0) {
        this.setState({ page: this.state.page - 1 });
        this.scrollPrev++;
        this.setState({ currentPage: this.state.currentPage - 1, portfolioPage: this.state.portfolioPage - 1 });
        this.refs.portfolio.updateScene(false);
        this.refs.menu.updateMenu(false);
        this.refs.logo.updateLogo(false);
        setTimeout( function() {
          this.scrollPrev = 0;
        }.bind(this), 400);
      } else if (this.state.currentPage == 11 && this.scroll2 == 0) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1 });
       this.refs.menu.updateMenu(false);
       this.refs.contact.out();
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ displayContact: 'none' });
       }.bind(this), 1100);
     }
   } else if (e.deltaY > 0 && !this.state.portfolioItemActivated && !this.state.resumeActivated) { // scroll down (next)
     if (this.state.page == 1 && this.scroll2 == 0 && this.enableScroll) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page + 1, currentPage: this.state.currentPage + 1, displayAbout: 'block' });
       this.refs.menu.updateMenu(true);
       this.refs.logo.updateLogo(true);
       this.refs.about.page1in();
       this.refs.welcome.out();
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ displayWelcome: 'none' });
       }.bind(this), 1300);
     } else if (this.state.page == 2 && this.scroll2 == 0) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page + 1, currentPage: this.state.currentPage + 1 });
       this.refs.about.page2inPage1out();
       setTimeout( function() {
         this.scroll2 = 0;
       }.bind(this), 1100);
     } else if (this.state.page == 3 && this.scroll2 == 0) {
       this.scroll2 = 1;
       this.setState({ currentPage: this.state.currentPage + 1, displayPortfolio: 'block', scrollDownOpacity: 0 });
       this.refs.menu.updateMenu(true);
       this.refs.about.page2out();
       this.refs.portfolio.in();
       this.refs.logo.updateLogo(true);
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ displayAbout: 'none', page: this.state.page + 1 });
       }.bind(this), 1100);
     } else if (this.state.page >= 4 && this.state.page <= 9 && this.scrollNext == 0 && this.scrollPrev == 0) {
       this.setState({ page: this.state.page + 1 });
       this.scrollNext = 1;
       this.setState({ currentPage: this.state.currentPage + 1, portfolioPage: this.state.portfolioPage + 1 });
       this.refs.portfolio.updateScene(true);
       this.refs.menu.updateMenu(true);
       this.refs.logo.updateLogo(true);
       setTimeout( function() {
         this.scrollNext = 0;
       }.bind(this), 400);
     } else if (this.state.currentPage == 10 && this.scroll2 == 0 && this.scrollNext == 0) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page + 1, displayContact: 'block' });
       this.refs.menu.updateMenu(true);
       this.refs.contact.in();
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ currentPage: this.state.currentPage + 1 });
       }.bind(this), 400);
     }
    }
  }

  activateResume() {
    if (this.state.resumeActivated == true) {
      this.setState({ resumeActivated: false });
    } else {
      this.setState({ resumeActivated: true });
    }
  }

  activatePortfolioItem() {
    if (this.state.portfolioItemActivated == true) {
      this.setState({ portfolioItemActivated: false });
    } else {
      this.setState({ portfolioItemActivated: true });
    }
  }

  // toWelcome() {
  //   this.refs.welcome.in();
  //   if (this.state.page == 2 && this.scroll2 == 0) {
  //     this.setState({ page: 1, currentPage: 1, displayWelcome: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.scroll2 = 1;
  //     this.refs.about.page1out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayAbout: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page == 3 && this.scroll2 == 0) {
  //     this.setState({ page: 1, currentPage: 1, displayWelcome: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.scroll2 = 1;
  //     this.refs.about.page2out2();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayAbout: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page >= 4 && this.state.page <= 10 && this.scroll2 == 0) {
  //     this.setState({ page: 1, currentPage: 1, displayWelcome: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.scroll2 = 1;
  //     this.refs.portfolio.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayPortfolio: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page == 11 && this.scroll2 == 0) {
  //     this.setState({ page: 1, currentPage: 1, displayWelcome: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.scroll2 = 1;
  //     this.refs.contact.out();
  //     this.refs.portfolio.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayContact: 'none', displayPortfolio: 'none' });
  //     }.bind(this), 1100);
  //   }
  // }
  //
  // toAbout() {
  //   if (this.state.page == 1 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 2, currentPage: 2, displayAbout: 'block' });
  //     this.refs.menu.updateMenu(true);
  //     this.refs.logo.updateLogo(true);
  //     this.refs.welcome.out();
  //     this.refs.about.page1in();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayWelcome: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page >= 4 && this.state.page <= 10 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 2, currentPage: 2, displayAbout: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.refs.about.page1in2();
  //     this.refs.portfolio.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayPortfolio: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page == 11 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 2, currentPage: 2, displayAbout: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.refs.about.page1in2();
  //     this.refs.contact.out();
  //     this.refs.portfolio.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayContact: 'none', displayPortfolio: 'none' });
  //     }.bind(this), 1100);
  //   }
  // }
  //
  // toPortfolio() {
  //   if (this.state.page == 1 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 4, currentPage: 4, displayPortfolio: 'block' });
  //     this.refs.menu.updateMenu(true);
  //     this.refs.logo.updateLogo(true);
  //     this.refs.welcome.out();
  //     this.refs.portfolio.in();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayWelcome: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page == 2 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 4, currentPage: 4, displayPortfolio: 'block' });
  //     this.refs.menu.updateMenu(true);
  //     this.refs.logo.updateLogo(true);
  //     this.refs.about.page1out2();
  //     this.refs.portfolio.in();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayAbout: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page == 3 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 4, currentPage: 4, displayPortfolio: 'block' });
  //     this.refs.menu.updateMenu(true);
  //     this.refs.logo.updateLogo(true);
  //     this.refs.about.page2out();
  //     this.refs.portfolio.in();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayPortfolio: 'none' });
  //     }.bind(this), 1100);
  //   } else if (this.state.page == 11 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 10, currentPage: 10 });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.contact.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayContact: 'none' });
  //     }.bind(this), 1100);
  //   }
  // }
  //
  // toContact() {
  //
  // }

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
  //       }.bind(this), 400 * (this.scrollPrev - 1) - (Date.now() - this.currentTime));
  //     } else {
  //       this.currentTime = Date.now();
  //       this.setState({ currentPage: this.state.currentPage - 1 });
  //       this.refs.portfolio.updateScene(false);
  //       this.refs.menu.updateMenu();
  //       this.refs.logo.updateLogo(false);
  //       setTimeout( function() {
  //         this.scrollPrev--;
  //       }.bind(this), 400);
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
  //       }.bind(this), 400 * (this.scrollNext - 1) - (Date.now() - this.currentTime));
  //     } else {
  //       this.currentTime = Date.now();
  //       this.setState({ currentPage: this.state.currentPage + 1 });
  //       this.refs.portfolio.updateScene(true);
  //       this.refs.menu.updateMenu();
  //       this.refs.logo.updateLogo(true);
  //       setTimeout( function() {
  //         this.scrollNext--;
  //       }.bind(this), 400);
  //     }
  //     this.setState({ page: this.state.page + 1 });
  //   }
  // }

  render() {
    const { loading } = this.state;

    if(loading) {
      return (
        <div className="Loading">
            <Loader ref="loader" />
        </div>
      );
    } else {
      return (
        <div className="App">
            <Welcome className="welcome" display={this.state.displayWelcome} page={this.state.page} ref="welcome" />
            <About className="about" display={this.state.displayAbout} activateResume={this.activateResume} page={this.state.page} ref="about" />
            <Portfolio className="portfolio" page={this.state.page} currentPage={this.state.portfolioPage} display={this.state.displayPortfolio}
                       activatePortfolioItem={this.activatePortfolioItem} ref="portfolio" />
            <Contact className="contact" ref="contact" display={this.state.displayContact} page={this.state.page} />
            <Logo className="logo" page={this.state.currentPage} ref="logo" />
            <Menu className="menu" page={this.state.page} currentPage={this.state.currentPage} ref="menu" />
            <div className="scrollDown" ref="scrollDown" style={{ opacity: this.state.scrollDownOpacity }}>
              SCROLL DOWN
            </div>
        </div>
      );
    }
  }
}

export default App;
