import React, { Component } from 'react';
import '../CSS/Logo.css';
import logoWholeWelcome from '../Images/logo_whole_welcome.png'
import logoPieceWelcome from '../Images/logo_piece_welcome.png'
import logoWholeAbout from '../Images/logo_whole_about.png'
import logoPieceAbout from '../Images/logo_piece_about.png'
import logoWholePortfolio1 from '../Images/logo_whole_portfolio_1.png'
import logoPiecePortfolio1 from '../Images/logo_piece_portfolio_1.png'
import logoWholePortfolio2 from '../Images/logo_whole_portfolio_2.png'
import logoPiecePortfolio2 from '../Images/logo_piece_portfolio_2.png'
import logoWholePortfolio3 from '../Images/logo_whole_portfolio_3.png'
import logoPiecePortfolio3 from '../Images/logo_piece_portfolio_3.png'
import logoWholePortfolio4 from '../Images/logo_whole_portfolio_4.png'
import logoPiecePortfolio4 from '../Images/logo_piece_portfolio_4.png'
import logoWholePortfolio5 from '../Images/logo_whole_portfolio_5.png'
import logoPiecePortfolio5 from '../Images/logo_piece_portfolio_5.png'
import logoWholePortfolio6 from '../Images/logo_whole_portfolio_6.png'
import logoPiecePortfolio6 from '../Images/logo_piece_portfolio_6.png'
import logoWholePortfolio7 from '../Images/logo_whole_portfolio_7.png'
import logoPiecePortfolio7 from '../Images/logo_piece_portfolio_7.png'

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render() {
    return (
      <div className="Logo">
          <img src={logoWholeWelcome} className="logoWhole" />
          <img src={logoPieceWelcome} className="logoPiece" />
      </div>
    );
  }
}

export default Logo;
