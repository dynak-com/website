import React from 'react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import useComponent from './hook';

const Footer = ({ content }) => {
    const { t } = useTranslation();
    const { year, onPrivacyPolicyModalOpenDone } = useComponent();
    return (
        <footer data-jest="mockyApp" className={`${styles.rodoContainer} my-2 text-light text-center mockyApp`}>
            <span className="rodoComp">
                &copy;{t(content.dynak)}
                {year}
            </span>
            <span className={`${styles.rodo} custom-styled-span ml-2`} onClick={onPrivacyPolicyModalOpenDone}>
                {t(content.rodo)}
            </span>
        </footer>
    );
};

export default Footer;
