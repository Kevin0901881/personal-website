import React, { Component } from 'react';
import '../CSS/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
          <div className="menuTitle">MENU</div>
          <div>
              <div id="welcome" className="menuItem">WELCOME</div>
              <div id="about" className="menuItem">ABOUT</div>
              <div id="portfolio" className="menuItem">PORTFOLIO</div>
              <div id="contact" className="menuItem">CONTACT</div>
          </div>
      </div>
    );
  }
}

export default Menu;
