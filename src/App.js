import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './Pages/SideBar';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';
import Workflow from './Pages/Workflow';
import NotFound from './Pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="router">
          <SideBar/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/Home" component={LandingPage}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Portfolio" component={Portfolio}/>
            <Route exact path="/Experience" component={Experience}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/Workflow" component={Workflow}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
