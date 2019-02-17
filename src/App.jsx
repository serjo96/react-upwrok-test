import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import './style.scss';
import Routes from "./Routes/Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes/>
      </div>
    );
  }
}

export default App;
