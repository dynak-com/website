import React from 'react';
import AnimatedSlider from '../../components/animated-slider/animated-slider.component';
import CardList from '../../components/card-list/card-list.component';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const MainPage = (props) => {
    const { header, posts } = props.content;
    const cardsData = {
        posts,
    };
    const { t } = useTranslation();
    return (
        <section className={styles.mainPageContainer}>
            <AnimatedSlider />
            <h1 className="text-center text-light d-block my-5">{t(header)}</h1>
            <CardList data={cardsData} />
        </section>
    );
};

export default MainPage;
