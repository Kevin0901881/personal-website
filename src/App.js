import React, { Component } from 'react';
import './App.css';
import Logo from './Components/Logo.js'
import Menu from './Components/Menu.js'
import Welcome from './Components/Welcome.js'
import About from './Components/About.js'

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
          <Logo />
          {/* <Welcome /> */}
          <About height={ window.innerHeight } width={ window.innerWidth } />
          <Menu />
      </div>
    );
  }
}

export default App;
