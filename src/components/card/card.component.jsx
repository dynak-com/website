import React from 'react';
import styles from './styles.module.css';

const Card = ({ textContent, className }) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <p className={`p-2 ${styles.cardParagraph}`}>{textContent}</p>
    </article>
  );
};

export default Card;
