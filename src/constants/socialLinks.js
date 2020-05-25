import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    footer: <FaLinkedinIn />,
    url: 'https://www.linkedin.com'
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon" />,
    footer: <FaTwitter />,
    url: 'https://www.twitter.com'
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon" />,
    footer: <FaInstagram />,
    url: 'https://www.instagram.com'
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon" />,
    footer: <FaGithub />,
    url: 'https://www.github.com'
  }
];

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url} className="social-link">
      {link.icon}
    </a>
  </li>
));

const footerLinks = data.map(link => (
  <li key={link.id}>
    <a href={link.url} className="social-link">
      {link.footer}
    </a>
  </li>
));

export default ({ styleClass, footer }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>
      {footer ? footerLinks : links}
    </ul>
  )
}