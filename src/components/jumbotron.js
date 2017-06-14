import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

import '../../style/jumbotron.css';

const Jumbotron = () => {

  return(
    <div className="jumbotron jumbotron-div">
    <Header />
      <h1> Conner Novicki</h1>
        <div className="menu-outer">
          <div className="nav-bar-div">
            <nav>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact + Downloads</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
  );
}

export default Jumbotron;
