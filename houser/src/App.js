import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Banner from './Components/Banner/banner';


import routes from './routes';

class App extends Component {
  render() {
    return (
      
      <HashRouter>
      <div className="App">
        {/* <Banner/> */}
        {routes}
      </div>
      </HashRouter>
      
    );
  }
}

export default App;
