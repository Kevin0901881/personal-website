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
      logoWhole: logoWholePortfolio1,
      logoPiece: logoPiecePortfolio1,
      logoWhole2: logoWholePortfolio1,
      logoPiece2: logoPiecePortfolio1,
      opacity: 1,
      opacity2: 0
    }
  }

  updateLogo(next) {
    if (next) {
      switch (this.props.page) {
        case 5:
          this.setState({ logoWhole: logoWholePortfolio1, logoPiece: logoPiecePortfolio1,
                          logoWhole2: logoWholePortfolio2, logoPiece2: logoPiecePortfolio2,
                          opacity: 0, opacity2: 1 });
          break;
        case 6:
          this.setState({ logoWhole: logoWholePortfolio3, logoPiece: logoPiecePortfolio3,
                          logoWhole2: logoWholePortfolio2, logoPiece2: logoPiecePortfolio2,
                          opacity: 1, opacity2: 0 });
          break;
        case 7:
          this.setState({ logoWhole: logoWholePortfolio3, logoPiece: logoPiecePortfolio3,
                          logoWhole2: logoWholePortfolio4, logoPiece2: logoPiecePortfolio4,
                          opacity: 0, opacity2: 1 });
          break;
        case 8:
          this.setState({ logoWhole: logoWholePortfolio5, logoPiece: logoPiecePortfolio5,
                          logoWhole2: logoWholePortfolio4, logoPiece2: logoPiecePortfolio4,
                          opacity: 1, opacity2: 0 });
          break;
        case 9:
          this.setState({ logoWhole: logoWholePortfolio5, logoPiece: logoPiecePortfolio5,
                          logoWhole2: logoWholePortfolio6, logoPiece2: logoPiecePortfolio6,
                          opacity: 0, opacity2: 1 });
          break;
        case 10:
          this.setState({ logoWhole: logoWholePortfolio7, logoPiece: logoPiecePortfolio7,
                          logoWhole2: logoWholePortfolio6, logoPiece2: logoPiecePortfolio6,
                          opacity: 1, opacity2: 0 });
          break;
      }
    } else {
      switch (this.props.page) {
        case 4:
          this.setState({ logoWhole: logoWholePortfolio1, logoPiece: logoPiecePortfolio1,
                          logoWhole2: logoWholePortfolio2, logoPiece2: logoPiecePortfolio2,
                          opacity: 1, opacity2: 0 });
          break;
        case 5:
          this.setState({ logoWhole: logoWholePortfolio3, logoPiece: logoPiecePortfolio3,
                          logoWhole2: logoWholePortfolio2, logoPiece2: logoPiecePortfolio2,
                          opacity: 0, opacity2: 1 });
          break;
        case 6:
          this.setState({ logoWhole: logoWholePortfolio3, logoPiece: logoPiecePortfolio3,
                          logoWhole2: logoWholePortfolio4, logoPiece2: logoPiecePortfolio4,
                          opacity: 1, opacity2: 0 });
          break;
        case 7:
          this.setState({ logoWhole: logoWholePortfolio5, logoPiece: logoPiecePortfolio5,
                          logoWhole2: logoWholePortfolio4, logoPiece2: logoPiecePortfolio4,
                          opacity: 0, opacity2: 1 });
          break;
        case 8:
          this.setState({ logoWhole: logoWholePortfolio5, logoPiece: logoPiecePortfolio5,
                          logoWhole2: logoWholePortfolio6, logoPiece2: logoPiecePortfolio6,
                          opacity: 1, opacity2: 0 });
          break;
        case 9:
          this.setState({ logoWhole: logoWholePortfolio7, logoPiece: logoPiecePortfolio7,
                          logoWhole2: logoWholePortfolio6, logoPiece2: logoPiecePortfolio6,
                          opacity: 0, opacity2: 1 });
          break;
      }
    }
  }

  render() {
    return (
      <div className="Logo">
          <img src={this.state.logoWhole2} className="logoWhole2" style={{ opacity: this.state.opacity2 }} />
          <img src={this.state.logoPiece2} className="logoPiece2" style={{ opacity: this.state.opacity2 }} />
          <img src={this.state.logoWhole} className="logoWhole" style={{ opacity: this.state.opacity }} />
          <img src={this.state.logoPiece} className="logoPiece" style={{ opacity: this.state.opacity }} />
      </div>
    );
  }
}

export default Logo;
