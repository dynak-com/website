import React from 'react';
import { LanguageImage } from './LanguageImage';
import PlFlag from '../../assets/images/plFlag.png';
import EnFlag from '../../assets/images/enFlag.png';
import styles from './styles.module.css';

export const LanguageSelector = () => {
    const localStorageLanguage = localStorage.getItem('i18nextLng');
    console.log(localStorageLanguage);
    return (
        <div className={styles.container ? 'opened' : null}>
            {localStorageLanguage === 'pl' ? (
                <LanguageImage flag={PlFlag} lang={'pl'} />
            ) : (
                <LanguageImage flag={EnFlag} lang={'en'} />
            )}
        </div>
    );
};
