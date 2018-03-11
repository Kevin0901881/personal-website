import React, { Component } from 'react';
import '../CSS/Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    if (this.props.page == '1') this.state = { opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)",
                                               welcome: '#5cd9b1', about: '#292929', portfolio: '#292929', contact: '#292929', color: '#5cd9b1',
                                               welcomeHover: false, aboutHover: false, portfolioHover: false, contactHover: false };
    if (this.props.page == '2') this.state = { opacityMenu: 0, opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(69px)",
                                               welcome: '#292929', about: '#292929', portfolio: '#292929', contact: '#292929', color: '#e639e4',
                                               welcomeHover: false, aboutHover: false, portfolioHover: false, contactHover: false };
    if (this.props.page == '3') this.state = { opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                                               welcome: '#292929', about: '#292929', portfolio: '#292929', contact: '#292929', color: '#ffffff',
                                               welcomeHover: false, aboutHover: false, portfolioHover: false, contactHover: false };
    if (this.props.page == '4') this.state = { opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(0px)",
                                               welcome: '#292929', about: '#292929', portfolio: '#292929', contact: '#292929', color: '#faad55',
                                               welcomeHover: false, aboutHover: false, portfolioHover: false, contactHover: false };
  }

  hoverOff() {
    this.props.page == '2' ? this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translate: "translateY(69px)",
                                             about: '#292929' }) : null;
    this.props.page == '3' ? this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 1, opacityContact: 0, translate: "translateY(34px)",
                                             portfolio: '#292929' }) : null;
    this.props.page == '4' ? this.setState({ opacityMenu: 0, opacityWelcome: 0, opacityAbout: 0, opacityPortfolio: 0, opacityContact: 1, translate: "translateY(0px)",
                                             contact: '#292929' }) : null;
  }

  hoverOn() {
    this.setState({ opacityMenu: 1, opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translate: "translateY(0px)" });
    this.props.page == '2' ? this.setState({ about: '#e639e4' }) : null;
    this.props.page == '3' ? this.setState({ portfolio: '#ffffff' }) : null;
    this.props.page == '4' ? this.setState({ contact: '#faad55' }) : null;
  }

  // pageTransitionAnimation(pageTransition) {
  //   (pageTransition && this.props.page == 1 && this.props.prevPage == 2) ?
  //     this.setState({ opacityWelcome: 1, opacityAbout: 1, opacityPortfolio: 1, opacityContact: 1, translateY: "-200px" }) : null;
  //   (pageTransition && this.props.page == 2 && this.props.prevPage == 1) ? this.setState({ opacityWelcome: 0, opacityAbout: 1, opacityPortfolio: 0, opacityContact: 0, translateY: "200px" }) : null;
  // }

  render() {
    return (
      <div className="Menu" onMouseEnter={() => { this.hoverOn() }} onMouseLeave={() => { this.hoverOff() }}>
          <div className="menuTitle" style={{ opacity: this.state.opacityMenu, transform: this.state.translate }}>MENU</div>
          <div>
              <div id="welcome" className="menuItem" onMouseEnter={() => this.setState({ welcome: this.state.color })}
                   onMouseLeave={() => this.props.page != '1' ? this.setState({ welcome: "#292929" }) : null}
                   style={{ opacity: this.state.opacityWelcome, transform: this.state.translate, color: this.state.welcome }}>WELCOME</div>
              <div id="about" className="menuItem" onMouseEnter={() => this.setState({ about: this.state.color })}
                   onMouseLeave={() => this.props.page != '2' ? this.setState({ about: "#292929" }) : null}
                   style={{ opacity: this.state.opacityAbout, transform: this.state.translate, color: this.state.about }}>ABOUT</div>
              <div id="portfolio" className="menuItem" onMouseEnter={() => this.setState({ portfolio: this.state.color })}
                   onMouseLeave={() => this.props.page != '3' ? this.setState({ portfolio: "#292929" }) : null}
                   style={{ opacity: this.state.opacityPortfolio, transform: this.state.translate, color: this.state.portfolio }}>PORTFOLIO</div>
              <div id="contact" className="menuItem" onMouseEnter={() => this.setState({ contact: this.state.color })}
                   onMouseLeave={() => this.props.page != '4' ? this.setState({ contact: "#292929" }) : null}
                   style={{ opacity: this.state.opacityContact, transform: this.state.translate, color: this.state.contact }}>CONTACT</div>
          </div>
      </div>
    );
  }
}

export default Menu;
