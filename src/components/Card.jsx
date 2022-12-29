/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './card.css';
// eslint-disable-next-line react/prop-types
const Card = ({ children, className, onClick }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <article className={`card ${className}`} onClick={onClick}>
    {children}
  </article>
);

export default Card;
