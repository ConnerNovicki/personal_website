import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import Header from './header';

import '../../style/jumbotron.css';
const reactImg = require('../../images/reactjs_image.png');

const Jumbotron = () => {

  return(
    <div className="jumbotron jumbotron-div">
    <Header />
      <h1>Conner Novicki</h1>
        <div className="menu-outer">
          <div className="nav-bar-div">
            <nav>
              <ul>
                <li><Link to="/home">About</Link></li>
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
