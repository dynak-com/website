import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = props => {
  const { posts } = props.data;
  return (
    <div className='px-4'>
      {onRenderCards(posts)}
    </div>
  );
};

function onRenderCards(posts) {
  const cards = posts.map((data, index) => {
    const { id, text, headerText } = data;
    return (
      <div key={ id } className='my-row row my-4 '>
        <div id='card-header'
          className={`col-12 col-md ${
            index % 2 !== 0 ? 'order-md-1' : 'order-md-2'
          }`}
        >
          <h2 className='card-header-text'>{headerText}</h2>
        </div>
        <div id='card-wrapper'
          className={`col-12 col-md-7 ${
            index % 2 !== 0 ? 'order-md-2' : 'order-md-1'
          }`}
        >
          <Card textContent={text} />
        </div>
      </div>
    );
  });
  return cards;
}

export default CardList;
