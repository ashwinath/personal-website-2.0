import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './Components/SideBar';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Work from './Components/Work';
import Blog from './Components/Blog';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="router">
          <SideBar/>
          <Route exact path="/" component={About}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/Work" component={Work}/>
          <Route exact path="/Blog" component={Blog}/>
        </div>
      </Router>
    );
  }
}

export default App;
