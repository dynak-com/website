import React from 'react';
import { useTranslation } from 'react-i18next';
import PlFlag from '../../assets/images/plFlag.png';
import EnFlag from '../../assets/images/enFlag.png';
import styles from './styles.module.css';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const localStorageLanguage = localStorage.getItem('i18nextLng');

    const changeLanguage = (lng) => {
        return i18n.changeLanguage(lng);
    };
    const languageImage = (flag, language) => {
        return (
            <div id={styles.box} onClick={() => changeLanguage(language)}>
                <img className={styles.img ? 'opened' : null} src={flag} alt={language} />
            </div>
        );
    };
    return (
        <div className={styles.container ? 'opened' : null}>
            {localStorageLanguage === 'pl' ? languageImage(EnFlag, 'en') : languageImage(PlFlag, 'pl')}
        </div>
    );
};
