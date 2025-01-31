import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../styles/Contact.css';
import Divider from './Divider';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <div className="contact-info">
        <FaEnvelope size={30} />
        <p>
          <a href="mailto:jcandrews2@icloud.com">jcandrews2@icloud.com</a>
        </p>
      </div>

      <Divider />

      <div className="contact-info">
        <FaPhoneAlt size={30} />
        <p>816-308-0603</p>
      </div>
    </div>
  );
};

export default Contact;
