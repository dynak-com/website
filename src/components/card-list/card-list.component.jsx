import React from 'react';
import Card from '../card/card.component';
import {
  StyledCardListContainer,
  StyledCardHeader,
  StyledCardWrapper
} from './card-list.styles';

const CardList = props => {
  const { posts } = props.data;
  return (
    <StyledCardListContainer className='px-4'>
      {onRenderCards(posts)}
    </StyledCardListContainer>
  );
};

function onRenderCards(posts) {
  const cards = posts.map((data, index) => {
    const { id, text, headerText } = data;
    return (
      <div key={id} className='row my-4'>
        <StyledCardHeader
          className={`col-12 col-md ${
            index % 2 !== 0 ? 'order-md-1' : 'order-md-2'
          }`}
        >
          <h2>{headerText}</h2>
        </StyledCardHeader>
        <StyledCardWrapper
          className={`col-12 col-md-7 ${
            index % 2 !== 0 ? 'order-md-2' : 'order-md-1'
          }`}
        >
          <Card textContent={text} />
        </StyledCardWrapper>
      </div>
    );
  });
  return cards;
}

export default CardList;
