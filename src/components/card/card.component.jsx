import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const Card = ({ textContent, className }) => {
    const { t } = useTranslation();
    return (
        <article className={`${styles.singleCard} ${className}`}>
            <p className={`p-2 ${styles.cardText}`}>{t(textContent)}</p>
        </article>
    );
};

export default Card;
