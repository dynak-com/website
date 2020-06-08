import React from 'react';
import useComponent from './hook';
import PlFlag from '../../assets/images/plFlag.png';
import EnFlag from '../../assets/images/enFlag.png';
import styles from './styles.module.css';

const langs = {
    nextLang: 'i18nextLng',
    en: 'en',
    pl: 'pl',
};

export const LanguageSelector = () => {
    const { localStorageLanguage, onChangeToEng, onChangeToPl } = useComponent(langs);
    return (
        <div className={styles.container ? styles.opened : ''}>
            {localStorageLanguage === langs.pl
                ? changeLanguageImage(EnFlag, langs.en, onChangeToEng)
                : changeLanguageImage(PlFlag, langs.pl, onChangeToPl)}
        </div>
    );
};

function changeLanguageImage(flag, language, onChangeLanguage) {
    return (
        <div className={styles.box} onClick={onChangeLanguage}>
            <img className={styles.img ? styles.opened : ''} src={flag} alt={language} />
        </div>
    );
}
