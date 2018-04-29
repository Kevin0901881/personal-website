import React, { Component } from 'react';
import '../CSS/Menu.css';
import Constants from './Constants.js'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityWelcome: 0,
      opacityAbout: 0,
      opacityPortfolio: 0,
      opacityContact: 0,
      translate: "translateY(103px)",
      welcome: Constants.SECONDARYCOLOR1,
      about: Constants.SECONDARYCOLOR1,
      portfolio: Constants.SECONDARYCOLOR1,
      contact: Constants.SECONDARYCOLOR1,
      color: Constants.PRIMARYCOLOR1,
      backgroundColor: Constants.SECONDARYCOLOR1
      // opacityMenu: 0,
      // opacityWelcome: 0,
      // opacityAbout: 0,
      // opacityPortfolio: 1,
      // opacityContact: 0,
      // translate: "translateY(34px)",
      // welcome: '#292929',
      // about: '#292929',
      // portfolio: '#292929',
      // contact: '#292929',
      // color: '#ffffff',
      // backgroundColor: '#292929'
    }

    this.updateMenu = this.updateMenu.bind(this);
  }

  componentDidMount() {
    this.in();
  }

  in() {
    setTimeout( function() {
      this.setState({ opacityWelcome: 1 });
    }.bind(this), 1250);
  }

  updateMenu(next) {
    switch (this.props.currentPage) {
      case 4:
        this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: Constants.SECONDARYCOLOR1, about: Constants.SECONDARYCOLOR1, portfolio: Constants.SECONDARYCOLOR1, contact: Constants.SECONDARYCOLOR1, backgroundColor: Constants.SECONDARYCOLOR1, color: Constants.PRIMARYCOLOR4 });
        break;
      case 5:
        this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: Constants.SECONDARYCOLOR5, about: Constants.SECONDARYCOLOR5, portfolio: Constants.SECONDARYCOLOR5, contact: Constants.SECONDARYCOLOR5, backgroundColor: Constants.SECONDARYCOLOR5, color: Constants.PRIMARYCOLOR5 });
        break;
      case 6:
        this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: Constants.SECONDARYCOLOR6, about: Constants.SECONDARYCOLOR6, portfolio: Constants.SECONDARYCOLOR6, contact: Constants.SECONDARYCOLOR6, backgroundColor: Constants.SECONDARYCOLOR6, color: Constants.PRIMARYCOLOR6 });
        break;
      case 7:
        this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: Constants.SECONDARYCOLOR7, about: Constants.SECONDARYCOLOR7, portfolio: Constants.SECONDARYCOLOR7, contact: Constants.SECONDARYCOLOR7, backgroundColor: Constants.SECONDARYCOLOR7, color: Constants.PRIMARYCOLOR7 });
        break;
      case 8:
        this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: Constants.SECONDARYCOLOR8, about: Constants.SECONDARYCOLOR8, portfolio: Constants.SECONDARYCOLOR8, contact: Constants.SECONDARYCOLOR8, backgroundColor: Constants.SECONDARYCOLOR8, color: Constants.PRIMARYCOLOR8 });
        break;
      case 9:
        this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: Constants.SECONDARYCOLOR9, about: Constants.SECONDARYCOLOR9, portfolio: Constants.SECONDARYCOLOR9, contact: Constants.SECONDARYCOLOR9, backgroundColor: Constants.SECONDARYCOLOR9, color: Constants.PRIMARYCOLOR9 });
        break;
    }
    if (next) {
      switch (this.props.page) {
        case 2:
          this.setState({ opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translate: "translateY(69px)",
                          welcome: Constants.SECONDARYCOLOR1, about: Constants.SECONDARYCOLOR1, portfolio: Constants.SECONDARYCOLOR1, contact: Constants.SECONDARYCOLOR1, backgroundColor: Constants.SECONDARYCOLOR1, color: Constants.PRIMARYCOLOR2 });
          break;
        case 10:
          this.setState({ welcome: Constants.SECONDARYCOLOR10, about: Constants.SECONDARYCOLOR10, portfolio: Constants.SECONDARYCOLOR10, contact: Constants.SECONDARYCOLOR10, backgroundColor: Constants.SECONDARYCOLOR10, color: Constants.PRIMARYCOLOR10 });
          break;
        case 11:
          this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(0px)" });
      }
    } else {
      switch (this.props.page) {
        case 1:
          this.setState({ opacityWelcome: 1, opacityAbout: 0, opacityPortfolio: 0, opacityContact: 0, translate: "translateY(103px)",
                          welcome: Constants.SECONDARYCOLOR1, about: Constants.SECONDARYCOLOR1, portfolio: Constants.SECONDARYCOLOR1, contact: Constants.SECONDARYCOLOR1, backgroundColor: Constants.SECONDARYCOLOR1, color: Constants.PRIMARYCOLOR1 });
          break;
        case 3:
          this.setState({ opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translate: "translateY(69px)",
                          welcome: Constants.SECONDARYCOLOR1, about: Constants.SECONDARYCOLOR1, portfolio: Constants.SECONDARYCOLOR1, contact: Constants.SECONDARYCOLOR1, backgroundColor: Constants.SECONDARYCOLOR1, color: Constants.PRIMARYCOLOR2 });
          break;
        case 10:
          this.setState({ opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)" });
      }
    }
  }

  render() {
    return (
      <div className="Menu">
          <div>
              <div id="welcome" className="menuItem"
                   style={{ opacity: this.state.opacityWelcome, transform: this.state.translate, color: this.state.welcome }}>WELCOME</div>
              <div id="about" className="menuItem"
                   style={{ opacity: this.state.opacityAbout, transform: this.state.translate, color: this.state.about }}>ABOUT</div>
              <div id="portfolio" className="menuItem"
                   style={{ opacity: this.state.opacityPortfolio, transform: this.state.translate, color: this.state.portfolio }}>PORTFOLIO</div>
              <div id="contact" className="menuItem"
                   style={{ opacity: this.state.opacityContact, transform: this.state.translate, color: this.state.contact }}>CONTACT</div>
          </div>
      </div>
    );
  }
}

export default Menu;
