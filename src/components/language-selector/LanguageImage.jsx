import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

export const LanguageImage = ({ flag, language }) => {
    const { i18n } = useTranslation();
    const onChangeLanguage = useCallback(() => {
        changeLanguage(language);
    });

    const changeLanguage = (lng) => {
        return i18n.changeLanguage(lng);
    };

    return (
        <div id={styles.box} onClick={onChangeLanguage}>
            <img className={styles.img ? 'opened' : null} src={flag} alt={language} />
        </div>
    );
};
