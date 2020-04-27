import React from 'react';
import AnimatedSlider from '../../components/animated-slider/animated-slider.component';
import styles from './styles.module.css';
import CardList from '../../components/card-list/card-list.component';

const MainPage = (props) => {
  const { header, posts } = props.content;
  const cardsData = {
    posts,
  };
  return (
    <section className={styles.mainPage}>
      <AnimatedSlider />
      <h1 className='text-center text-light d-block my-5'>{header}</h1>
      <CardList data={cardsData} />
    </section>
  );
};

export default MainPage;
