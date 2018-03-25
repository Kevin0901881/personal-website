import React, { Component } from 'react';
import '../CSS/Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // opacityMenu: 1,
      // opacityWelcome: 1,
      // opacityAbout: 1,
      // opacityPortfolio: 1,
      // opacityContact: 1,
      // translate: "translateY(0px)",
      // welcome: '#5cd9b1',
      // about: '#292929',
      // portfolio: '#292929',
      // contact: '#292929',
      // color: '#5cd9b1',
      // welcomeHover: false,
      // aboutHover: false,
      // portfolioHover: false,
      // contactHover: false
      opacityMenu: 0,
      opacityWelcome: 0,
      opacityAbout: 0,
      opacityPortfolio: 1,
      opacityContact: 0,
      translate: "translateY(34px)",
      welcome: '#292929',
      about: '#292929',
      portfolio: '#292929',
      contact: '#292929',
      color: '#ffffff',
      backgroundColor: '#292929'
    }

    this.updateMenu = this.updateMenu.bind(this);
  }

  updateMenu(next) {
    switch (this.props.currentPage) {
      case 1:
        this.setState({ opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)",
                        welcome: '#5cd9b1', about: '#292929', portfolio: '#292929', contact: '#292929', backgroundColor: '#292929', color: '#5cd9b1' });
        break;
      case 2:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(69px)",
                        welcome: '#292929', about: '#292929', portfolio: '#292929', contact: '#292929', backgroundColor: '#292929', color: '#e639e4' });
        break;
      case 3:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(69px)",
                        welcome: '#292929', about: '#292929', portfolio: '#292929', contact: '#292929', backgroundColor: '#292929', color: '#e639e4' });
        break;
      case 4:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#292929', about: '#292929', portfolio: '#292929', contact: '#292929', backgroundColor: '#292929', color: '#ffffff' });
        break;
      case 5:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#b52948', about: '#b52948', portfolio: '#b52948', contact: '#b52948', backgroundColor: '#b52948', color: '#04307b' });
        break;
      case 6:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#b5b5b5', about: '#b5b5b5', portfolio: '#b5b5b5', contact: '#b5b5b5', backgroundColor: '#b5b5b5', color: '#321914' });
        break;
      case 7:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#a2192a', about: '#a2192a', portfolio: '#a2192a', contact: '#a2192a', backgroundColor: '#a2192a', color: '#e7bc53' });
        break;
      case 8:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#118f3d', about: '#118f3d', portfolio: '#118f3d', contact: '#118f3d', backgroundColor: '#118f3d', color: '#000000' });
        break;
      case 9:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#572933', about: '#572933', portfolio: '#572933', contact: '#572933', backgroundColor: '#572933', color: '#e4e4f0' });
        break;
      case 10:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        welcome: '#012165', about: '#012165', portfolio: '#012165', contact: '#012165', backgroundColor: '#012165', color: '#faad55' });
        break;
    }
    if (next) {
      switch (this.props.page) {
        case 11:
          this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(0px)",
                          welcome: '#012165', about: '#012165', portfolio: '#012165', contact: '#012165', backgroundColor: '#012165', color: '#faad55' });
      }
    } else {
      switch (this.props.page) {
        case 10:
          this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                          welcome: '#012165', about: '#012165', portfolio: '#012165', contact: '#012165', backgroundColor: '#012165', color: '#faad55' });
      }
    }
  }

  hoverOff() {
    switch (this.props.currentPage) {
      case 2:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translate: "translateY(69px)",
                        about: '#292929' });
        break;
      case 3:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translate: "translateY(69px)",
                        about: '#292929' });
        break;
      case 4:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#292929' });
        break;
      case 5:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#b52948' });
        break;
      case 6:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#b5b5b5' });
        break;
      case 7:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#a2192a' });
        break;
      case 8:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#118f3d' });
        break;
      case 9:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#572933' });
        break;
      case 10:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                        portfolio: '#012165' });
        break;
      case 11:
        this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(0px)",
                        contact: '#012165' });
        break;
    }
  }

  hoverOn() {
    switch (this.props.currentPage) {
      case 2:
        this.setState({ about: '#e639e4', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 3:
        this.setState({ about: '#e639e4', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 4:
        this.setState({ portfolio: '#ffffff', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 5:
        this.setState({ portfolio: '#04307b', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 6:
        this.setState({ portfolio: '#321914', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 7:
        this.setState({ portfolio: '#e7bc53', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 8:
        this.setState({ portfolio: '#000000', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 9:
        this.setState({ portfolio: '#e4e4f0', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 10:
        this.setState({ portfolio: '#faad55', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
      case 11:
        this.setState({ contact: '#faad55', opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
        break;
    }
  }

  // pageTransitionAnimation(pageTransition) {
  //   (pageTransition && this.props.currentPage == 1 && this.props.prevPage == 2) ?
  //     this.setState({ opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translateY: "-200px" }) : null;
  //   (pageTransition && this.props.currentPage == 2 && this.props.prevPage == 1) ? this.setState({ opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translateY: "200px" }) : null;
  // }

  render() {
    return (
      <div className="Menu" onMouseEnter={() => { this.hoverOn() }} onMouseLeave={() => { this.hoverOff() }}>
          <div className="menuTitle" style={{ opacity: this.state.opacityMenu, transform: this.state.translate, color: this.state.backgroundColor }}>MENU</div>
          <div>
              <div id="welcome" className="menuItem" onMouseEnter={() => this.setState({ welcome: this.state.color })}
                   onMouseLeave={() => {if (this.props.currentPage != '1') this.setState({ welcome: this.state.backgroundColor })}}
                   style={{ opacity: this.state.opacityWelcome, transform: this.state.translate, color: this.state.welcome }}>WELCOME</div>
              <div id="about" className="menuItem" onMouseEnter={() => this.setState({ about: this.state.color })}
                   onMouseLeave={() => {if (this.props.currentPage != '2' || this.props.currentPage != '3') this.setState({ about: this.state.backgroundColor })}}
                   style={{ opacity: this.state.opacityAbout, transform: this.state.translate, color: this.state.about }}>ABOUT</div>
              <div id="portfolio" className="menuItem" onMouseEnter={() => {if (this.props.currentPage == '1' || this.props.currentPage == '2' ||
                                                                                this.props.currentPage == '3' || this.props.currentPage == '11') this.setState({ portfolio: this.state.color })}}
                   onMouseLeave={() => {if (this.props.currentPage == '1' || this.props.currentPage == '2' ||
                                            this.props.currentPage == '3' || this.props.currentPage == '11') this.setState({ portfolio: this.state.backgroundColor })}}
                   style={{ opacity: this.state.opacityPortfolio, transform: this.state.translate, color: this.state.portfolio }}>PORTFOLIO</div>
              <div id="contact" className="menuItem" onMouseEnter={() => this.setState({ contact: this.state.color })}
                   onMouseLeave={() => {if (this.props.currentPage != '11') this.setState({ contact: this.state.backgroundColor })}}
                   style={{ opacity: this.state.opacityContact, transform: this.state.translate, color: this.state.contact }}>CONTACT</div>
          </div>
      </div>
    );
  }
}

export default Menu;
