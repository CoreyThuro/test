import React from 'react';
//email contact form and map 
function Contact() {
    //replace br's with bootstrap rows
    return (
      <div className="container">
        <div id="contact-header" className="row">
          <h1>Contact us:</h1>
        </div>
        <div className="row">
          <input type="text" placeholder="name" />
        </div>
        <div className="row">
          <input type="email" name="email" id="email" placeholder="email" />
        </div>
        <div className="row">
          <textarea placeholder="message" />
        </div>
        <div className="row">
          <button id="contact-button">Submit</button>
        </div>
      </div>
    );
};

export default Contact;