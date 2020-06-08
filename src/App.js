import React, { Component } from 'react';
import './App.css';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App appContainer">
        <Router>
          <div>
            <div class="navbar navbar-main">
              <NavLink exact to="/" activeClassName="activeLink">home</NavLink>
              <NavLink to="/projects" className="navItem" activeClassName="activeLink">projects</NavLink>
              <NavLink to="/about" className="navItem" activeClassName="activeLink">about</NavLink>
            </div>

            <Switch>
              <Route exact path="/">
                <div class="introSection fadein-page">
                  <h1 className="introTitle">Hi! I'm Erin.</h1>
                  <p className="introDescription">I'm a mission-driven developer looking to empower people and share stories.</p>
                </div>
                <Experience/>
              </Route>
              <Route exact path="/projects">
                <Projects/>
              </Route>
              <Route exact path="/about">
                <About/> 
              </Route>
              <Route exact path="/about/now">
                  <About/>
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;