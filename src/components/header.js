import React from 'react';

import '../../style/header.css';

const imgSrc = require('../../images/reactjs_image.png');

const Header = () => {
  return (
    <div className="header">
      <p>Made with:</p>
      <img src={imgSrc} alt="reactjs"/>
    </div>
  );
}

export default Header;
