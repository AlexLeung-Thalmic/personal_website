import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";


const data = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about'
  },
  {
    id: 3,
    text: 'blog',
    url: '/blog'
  }
];

const tempNavLinks = data.map(link => {
  return (
    <li key={link.id}>
      <AniLink fade to={link.url}>{link.text}</AniLink>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`${styleClass}`}>
      {tempNavLinks}
    </ul>
  )
}