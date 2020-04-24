import React from 'react';
import './card.styles.css';

const Card = ({ textContent }) => {
  return (
    <article className='styled-card'>
      <p className='card-text p-2'>{textContent}</p>
    </article>
  );
};

export default Card;
