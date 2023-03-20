import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="Footer">
      <a href="https://github.com/boy-son">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/branden-wheat/">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    </div>
  );
};

export default Footer;