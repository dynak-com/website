import React from 'react';
import AnimatedSlider from '../../components/animated-slider/animated-slider.component';
import CardList from '../../components/card-list/card-list.component';
import './main-page.styles.css';

const MainPage = props => {
  const { header, posts } = props.content;
  const cardsData = {
    posts
  };
  return (
    <section className='main-page-container'>
      <AnimatedSlider />
      <h1 className='main-page-title text-center text-light d-block my-5'>{header}</h1>
      <CardList data={cardsData} />
    </section>
  );
};

export default MainPage;
