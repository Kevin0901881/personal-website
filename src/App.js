import React, { Component } from 'react';
import './App.css';
import Logo from './Components/Logo.js';
import Menu from './Components/Menu.js';
import Welcome from './Components/Welcome.js';
import About from './Components/About.js';
import Portfolio from './Components/Portfolio.js';

class App extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "black";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    return (
      <div className="App">
          <Logo className="logo" />
          {/* <Welcome /> */}
          {/* <About height={ window.innerHeight } width={ window.innerWidth } /> */}
          <Portfolio />
          <Menu page="3"/>
      </div>
    );
  }
}

export default App;
