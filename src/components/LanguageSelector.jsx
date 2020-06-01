import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import PlFlag from '../assets/images/plFlag.png';
import EnFlag from '../assets/images/enFlag.png';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const classes = useStyles();
    const localStorageLanguage = localStorage.getItem('i18nextLng');

    const changeLanguage = (lng) => {
        return i18n.changeLanguage(lng);
    };
    const languageImage = (flag, language) => {
        return (
            <div className={classes.box} onClick={() => changeLanguage(language)}>
                <img className={classes.img ? 'opened' : null} src={flag} alt={language} />
            </div>
        );
    };
    return (
        <div className={classes.container ? 'opened' : null}>
            {localStorageLanguage === 'pl' ? languageImage(EnFlag, 'en') : languageImage(PlFlag, 'pl')}
        </div>
    );
};

const useStyles = makeStyles({
    img: {
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 0 2px 0px #fff',
            transition: 'all 0.3s ease-in-out',
        },
    },
    container: {
        '&.opened': {
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '5px',
            padding: 'inherit',
            '&:hover': {
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
            },
        },
    },
    box: {
        margin: '20px',
        display: 'flex',
    },
    name: {
        '&.opened': {
            padding: '5px',
        },
    },
});
