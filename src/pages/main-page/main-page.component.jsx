import React from 'react';
import AnimatedSlider from '../../components/animated-slider/animated-slider.component';
import CardList from '../../components/card-list/card-list.component';
import styles from './styles.module.css';

const MainPage = props => {
  const { header, posts } = props.content;
  const cardsData = {
    posts
  };
  return (
    <section className={styles.mainPageContainer}>
      <AnimatedSlider />
      <h1 className={ `${styles.mainPageTitle} text-center text-light d-block my-5` }>{header}</h1>
      <CardList data={cardsData} />
    </section>
  );
};

export default MainPage;
