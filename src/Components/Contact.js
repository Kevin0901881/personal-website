import React, { Component } from 'react';
import '../CSS/Contact.css';
import linkedin from '../Images/logo_linkedin.png';
import github from '../Images/logo_github.png';
import behance from '../Images/logo_behance.png';
import email from '../Images/logo_email.png';
import linkedinDark from '../Images/logo_linkedin_dark.png';
import githubDark from '../Images/logo_github_dark.png';
import behanceDark from '../Images/logo_behance_dark.png';
import emailDark from '../Images/logo_email_dark.png';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityLinkedin: 0,
      opacityGithub: 0,
      opacityBehance: 0,
      opacityEmail: 0,
      opacityLinkedinDark: 0,
      opacityGithubDark: 0,
      opacityBehanceDark: 0,
      opacityEmailDark: 0,
      translateLinkedin: '',
      translateGithub: '',
      translateBehance: '',
      translateEmail: '',
      heightBackground: 0
    }
  }

  in() {
    setTimeout( function() {
      this.setState({ heightBackground: window.innerHeight * 0.8 + 'px' });
    }.bind(this), 1);

    setTimeout( function() {
      this.setState({ opacityLinkedin: 1, translateLinkedin: 'translateY(-15px)' });
    }.bind(this), 100);

    setTimeout( function() {
      this.setState({ opacityGithub: 1, translateGithub: 'translateY(-15px)' });
    }.bind(this), 200);

    setTimeout( function() {
      this.setState({ opacityBehance: 1, translateBehance: 'translateY(-15px)' });
    }.bind(this), 300);

    setTimeout( function() {
      this.setState({ opacityEmail: 1, translateEmail: 'translateY(-15px)' });
    }.bind(this), 400);
  }

  out() {
    this.setState({ opacityEmail: 0, translateEmail: 'translateY(15px)' });

    setTimeout( function() {
      this.setState({ opacityBehance: 0, translateBehance: 'translateY(15px)' });
    }.bind(this), 100);

    setTimeout( function() {
      this.setState({ opacityGithub: 0, translateGithub: 'translateY(15px)' });
    }.bind(this), 200);

    setTimeout( function() {
      this.setState({ opacityLinkedin: 0, translateLinkedin: 'translateY(15px)' });
    }.bind(this), 300);

    setTimeout( function() {
      this.setState({ heightBackground: 0 });
    }.bind(this), 400);
  }

  render() {
    return (
      <div className="Contact" style={{ height: this.state.heightBackground, display: this.props.display }}>
        <div className="logos">
          <a href="https://www.linkedin.com/in/kevinli0123/" target="_blank" className="link" onMouseEnter={ () => {this.setState({ opacityLinkedinDark: 1 })} }
             onMouseOut={ () => {this.setState({ opacityLinkedinDark: 0 })}}>
            <img src={linkedin} className="logo" style={{ opacity: this.state.opacityLinkedin, transform: this.state.translateLinkedin }} />
            <img src={linkedinDark} className="logo2" style={{ opacity: this.state.opacityLinkedinDark, transform: this.state.translateLinkedin }} />
          </a>
          <a href="https://github.com/Kevin0901881" target="_blank" className="link" onMouseEnter={ () => {this.setState({ opacityGithubDark: 1 })} }
             onMouseOut={ () => {this.setState({ opacityGithubDark: 0 })}}>
            <img src={github} className="logo" style={{ opacity: this.state.opacityGithub, transform: this.state.translateGithub }} />
            <img src={githubDark} className="logo2" style={{ opacity: this.state.opacityGithubDark, transform: this.state.translateGithub }} />
          </a>
          <a href="https://www.behance.net/kevin09018a40a" target="_blank" className="link" onMouseEnter={ () => {this.setState({ opacityBehanceDark: 1 })} }
             onMouseOut={ () => {this.setState({ opacityBehanceDark: 0 })}}>
            <img src={behance} className="logo" style={{ opacity: this.state.opacityBehance, transform: this.state.translateBehance }} />
            <img src={behanceDark} className="logo2" style={{ opacity: this.state.opacityBehanceDark, transform: this.state.translateBehance }} />
          </a>
          <a className="link" onMouseEnter={ () => {this.setState({ opacityEmailDark: 1 })} }
             onMouseOut={ () => {this.setState({ opacityEmailDark: 0 })}}>
            <img src={email} className="logo" style={{ opacity: this.state.opacityEmail, transform: this.state.translateEmail }} />
            <img src={emailDark} className="logo2" style={{ opacity: this.state.opacityEmailDark, transform: this.state.translateEmail }} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
