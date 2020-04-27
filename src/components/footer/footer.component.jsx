import React from 'react';
import styles from './styles.module.css';
import useComponent from './hook';

const Footer = () => {
  const { year, onPrivacyPolicyModalOpenDone } = useComponent();
  return (
    <footer className={`my-2 text-light text-center ${styles.siteFooter}`}>
      <span>&copy;dynak.com {year}</span>
      <span
        className={`ml-2 ${styles.rodoLink}`}
        onClick={onPrivacyPolicyModalOpenDone}
      >
        RODO
      </span>
    </footer>
  );
};

export default Footer;
