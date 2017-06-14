import React, { Component } from 'react';
import ModalBuilder from './modal_builder';

import '../../style/portfolio.css';

const portfolioObj = [
  {
    name: 'Python Chess',
    imgId: 'CHESS',
    github: 'https://github.com/ConnerNovicki/Pygame_Chess',
  },
  {
    name: 'Steering Behaviors',
    imgId: 'STEERING',
    github: 'https://github.com/ConnerNovicki/P5_Steering_Behaviors',
    run: 'https://connernovicki.github.io/P5_Steering_Behaviors/'
  },
  {
    name: 'Tetris',
    imgId: 'TETRIS',
    github: 'https://github.com/ConnerNovicki/tetris_p5_js/',
    run: 'https://connernovicki.github.io/tetris_p5_js/'
  },
  {
    name: 'Binary Genetic Algorithm',
    imgId: 'GA_BINARY',
    github: 'https://github.com/ConnerNovicki/Genetic_Algorithm_Binary_Strings/',
    run: 'https://connernovicki.github.io/Genetic_Algorithm_Binary_Strings/'
  },
  {
    name: 'React-Redux Weather App',
    imgId: 'WEATHER',
    github: 'https://github.com/ConnerNovicki/react-redux-weather'
  },
  {
    name: 'League of Legends Build Creator',
    imgId: 'LOL_BUILDER',
    github: 'https://github.com/ConnerNovicki/LoL_Build_Creator',
    run: 'https://connernovicki.github.io/LoL_Build_Creator/'
  }
]


class Portfolio extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="portfolio-div">
          <ul>
          {portfolioObj.map((obj) => <ModalBuilder key={obj.name} data={obj} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Portfolio;
