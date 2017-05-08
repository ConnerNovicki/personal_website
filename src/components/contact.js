import React from 'react';

import '../../style/contact.css';

const resume = require('../../pdfs/Resume.pdf');

const Contact = () => {
  return (
    <div className="contact-div">
      <h1>Contact Information</h1>
      <p>Email: connernovicki@gmail.com</p>
      <p>Phone: (502)-554-5777</p>
      <p><a href="https://www.linkedin.com/in/conner-novicki-23b642111">LinkedIn</a></p>
      <p><a href="https://github.com/ConnerNovicki">Github</a></p>

      <h1>Downloads</h1>
      <p><a href={resume}>Resume</a></p>
      <div style={{height: 50}}></div>
    </div>
  );
}

export default Contact;
