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
    this.scroll2 = 0;
    this.currentTime = 0;
    this.state = {
      page: 1,
      currentPage: 1,
      portfolioPage: 4,
      displayWelcome: 'block',
      displayAbout: 'none',
      displayPortfolio: 'none',
      displayContact: 'none',
      resumeActivated: false,
      portfolioItemActivated: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.activateResume = this.activateResume.bind(this);
    this.activatePortfolioItem = this.activatePortfolioItem.bind(this);
    // this.handleArrow = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  handleScroll(e) {
    if (e.deltaY < 0) { // scroll up (prev)
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
        }.bind(this), 800);
      } else if (this.state.page == 3 && this.scroll2 == 0 && !this.state.resumeActivated) {
        this.scroll2 = 1;
        this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1 });
        this.refs.menu.updateMenu(false);
        this.refs.about.page1inPage2out();
        setTimeout( function() {
          this.scroll2 = 0;
        }.bind(this), 800);
      } else if (this.state.page == 4 && this.scroll2 == 0 && this.scrollPrev == 0 && !this.state.portfolioItemActivated) {
        this.scroll2 = 1;
        this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1, displayAbout: 'block' });
        this.refs.menu.updateMenu(false);
        this.refs.about.page2in();
        this.refs.portfolio.out();
        this.refs.logo.updateLogo(false);
        setTimeout( function() {
          this.scroll2 = 0;
          this.setState({ displayPortfolio: 'none' });
        }.bind(this), 800);
      } else if (this.state.page >= 5 && this.state.page <= 10 && !this.state.portfolioItemActivated) {
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
      } else if (this.state.currentPage == 11 && this.scroll2 == 0) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page - 1, currentPage: this.state.currentPage - 1 });
       this.refs.menu.updateMenu(false);
       this.refs.contact.out();
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ displayContact: 'none' });
       }.bind(this), 800);
     }
   } else if (e.deltaY > 0) { // scroll down (next)
     if (this.state.page == 1 && this.scroll2 == 0) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page + 1, currentPage: this.state.currentPage + 1, displayAbout: 'block' });
       this.refs.menu.updateMenu(true);
       this.refs.logo.updateLogo(true);
       this.refs.about.page1in();
       this.refs.welcome.out();
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ displayWelcome: 'none' });
       }.bind(this), 800);
     } else if (this.state.page == 2 && this.scroll2 == 0) {
       this.scroll2 = 1;
       this.setState({ page: this.state.page + 1, currentPage: this.state.currentPage + 1 });
       this.refs.menu.updateMenu(true);
       this.refs.about.page2inPage1out();
       setTimeout( function() {
         this.scroll2 = 0;
       }.bind(this), 800);
     } else if (this.state.page == 3 && this.scroll2 == 0 && !this.state.resumeActivated) {
       this.scroll2 = 1;
       this.setState({ currentPage: this.state.currentPage + 1, displayPortfolio: 'block' });
       this.refs.menu.updateMenu(true);
       this.refs.about.page2out();
       this.refs.portfolio.in();
       this.refs.logo.updateLogo(true);
       setTimeout( function() {
         this.scroll2 = 0;
         this.setState({ displayAbout: 'none', page: this.state.page + 1 });
       }.bind(this), 800);
     } else if (this.state.page >= 4 && this.state.page <= 9 && !this.state.portfolioItemActivated) {
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
     } else if (this.state.currentPage == 10 && this.scroll2 == 0 && !this.state.portfolioItemActivated) {
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
  //     }.bind(this), 800);
  //   } else if (this.state.page == 3 && this.scroll2 == 0) {
  //     this.setState({ page: 1, currentPage: 1, displayWelcome: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.scroll2 = 1;
  //     this.refs.about.page2out2();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayAbout: 'none' });
  //     }.bind(this), 800);
  //   } else if (this.state.page >= 4 && this.state.page <= 10 && this.scroll2 == 0) {
  //     this.setState({ page: 1, currentPage: 1, displayWelcome: 'block' });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.logo.updateLogo(false);
  //     this.scroll2 = 1;
  //     this.refs.portfolio.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayPortfolio: 'none' });
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
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
  //     }.bind(this), 800);
  //   } else if (this.state.page == 11 && this.scroll2 == 0) {
  //     this.scroll2 = 1;
  //     this.setState({ page: 10, currentPage: 10 });
  //     this.refs.menu.updateMenu(false);
  //     this.refs.contact.out();
  //     setTimeout( function() {
  //       this.scroll2 = 0;
  //       this.setState({ displayContact: 'none' });
  //     }.bind(this), 800);
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
          <Welcome className="welcome" display={this.state.displayWelcome} ref="welcome" />
          <About className="about" display={this.state.displayAbout} activateResume={this.activateResume} ref="about" />
          <Portfolio className="portfolio" page={this.state.page} currentPage={this.state.portfolioPage} display={this.state.displayPortfolio}
                     activatePortfolioItem={this.activatePortfolioItem} ref="portfolio" />
          <Contact className="contact" ref="contact" display={this.state.displayContact} />
          <Menu className="menu" page={this.state.page} currentPage={this.state.currentPage} ref="menu" />
      </div>
    );
  }
}

export default App;
