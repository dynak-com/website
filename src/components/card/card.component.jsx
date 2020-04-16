import React from 'react';
import './card.styles.css';

const Card = ({ textContent }) => {
  return (
    <article className = 'card'>
      <p className='p-2'>{textContent}</p>
    </article>
  );
};

export default Card;
