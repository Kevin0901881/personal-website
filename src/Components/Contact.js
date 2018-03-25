import React, { Component } from 'react';
import '../CSS/Contact.css';
import linkedin from '../Images/logo_linkedin.png';
import github from '../Images/logo_github.png';
import behance from '../Images/logo_behance.png';
import email from '../Images/logo_email.png';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityLinkedin: 0,
      opacityGithub: 0,
      opacityBehance: 0,
      opacityEmail: 0,
      translateLinkedin: '',
      translateGithub: '',
      translateBehance: '',
      translateEmail: '',
      heightBackground: 0
    }
  }

  in() {
    this.setState({ heightBackground: window.innerHeight * 0.8 + 'px' });

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
      <div className="Contact" style={{ height: this.state.heightBackground }}>
        <div className="logos">
          <img src={linkedin} className="logo" style={{ opacity: this.state.opacityLinkedin, transform: this.state.translateLinkedin }} />
          <img src={github} className="logo" style={{ opacity: this.state.opacityGithub, transform: this.state.translateGithub }} />
          <img src={behance} className="logo" style={{ opacity: this.state.opacityBehance, transform: this.state.translateBehance }} />
          <img src={email} className="logo" style={{ opacity: this.state.opacityEmail, transform: this.state.translateEmail }} />
        </div>
      </div>
    );
  }
}

export default Contact;
