import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import "../../style/modal_builder.css";

const IMG_SRC = {
  CHESS: require('../../images/chess.png'),
  GA_BINARY: require('../../images/ga_binary.png'),
  LOL_BUILDER: require('../../images/lol_builder.png'),
  LOL_STATS: require('../../images/lol_stats.png'),
  PATHFINDING: require('../../images/pathfind.png'),
  STEERING: require('../../images/steering.png'),
  TETRIS: require('../../images/tetris.png'),
  WEATHER: require('../../images/weather_app.png')
}

class ModalBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  renderRunProgram(run){
    if (run === undefined) return <div></div>;

    return (<p>Try out the program here: <a href={run} target="_blank">Run</a></p>);
  }

  render() {
    const data = this.props.data;
    const name = data.name;
    const imgId = data.imgId;
    const github = data.github;
    const run = data.run;
    const src = IMG_SRC[imgId];

    return (
      <div>
        <li onClick={this.openModal} className="port-li">{name}</li>
        <Modal
          show={this.state.showModal}
          onHide={this.closeModal}
          bsSize="lg" >
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-inside-div">
              <img src={src} alt={name} className="modal-inside-img" />
              <p>Check out the code on GitHub here: <a href={github} target="_blank">Code</a></p>
              {this.renderRunProgram(run)}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalBuilder;
