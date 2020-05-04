import React from 'react';
import styles from './styles.module.css';

const Card = ( { textContent, className } ) =>
{
  return (
    <article className={ `${ styles.singleCard } ${ className }` }>
      <p className={ `p-2 ${ styles.cardText }` }>{ textContent }</p>
    </article>
  );
};

export default Card;

