import React from 'react';
import AnimatedSlider from '../../components/animated-slider/animated-slider.component';
import { StyledMainPageContainer } from './main-page.styles';
import CardList from '../../components/card-list/card-list.component';

const MainPage = props => {
  const { header, posts } = props.content;
  const cardsData = {
    posts
  };
  return (
    <StyledMainPageContainer>
      <AnimatedSlider />
      <h1 className='text-center text-light d-block my-5'>{header}</h1>
      <CardList data={cardsData} />
    </StyledMainPageContainer>
  );
};

export default MainPage;
