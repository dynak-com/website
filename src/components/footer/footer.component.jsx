import React from 'react';
import styles from './styles.module.css';
import useComponent from './hook';

const Footer = () => {
  const { year, onPrivacyPolicyModalOpenDone } = useComponent();
  return (
    <footer className={ `${ styles.rodoContainer } my-2 text-light text-center`}>
      <span>&copy;dynak.com {year}</span>
      <span className={`${styles.rodo} custom-styled-span ml-2`} onClick={onPrivacyPolicyModalOpenDone}>
        RODO
      </span>
    </footer>
  );
};

export default Footer;
