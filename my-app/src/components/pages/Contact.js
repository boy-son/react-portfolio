import React, { useState } from 'react';
import '../../styles/Contact.css';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
      };
    
  return (
    <div className="d-flex justify-content-center">
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Here's my contact information:</p>
      <div className="contact-info">
  <div className="email">
    <span>Email:</span> branden.wheat@yahoo.com
  </div>
  <div className="phone">
    <span>Phone:</span> 555-555-1212
  </div>
</div>
        <p>Or you can fill out this form to send me a message:</p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;