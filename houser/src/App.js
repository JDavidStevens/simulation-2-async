import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        {routes}
      </div>
      </HashRouter>
    );
  }
}

export default App;