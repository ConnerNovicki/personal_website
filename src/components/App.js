import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, HashRouter } from 'react-router-dom';
import Home from './home';
import Jumbotron from './jumbotron';
import Portfolio from './portfolio';
import Contact from './contact';

class App extends Component {
  render() {
    return (
        <HashRouter basename='/'>
          <div>
            <Jumbotron />
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/*" to="/" />
          </div>
        </HashRouter>
    );
  }
}

export default App;

// <Redirect from="/" to="/home" />
