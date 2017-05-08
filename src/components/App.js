import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './home';
import Jumbotron from './jumbotron';
import Portfolio from './portfolio';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Jumbotron />
            <Route path="/home" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" to="/home" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
