import React from 'react';
import useComponent from './hook';
import './footer.styles.css'

const Footer = () => {
  const { year, onPrivacyPolicyModalOpenDone } = useComponent();
  return (
    <footer className='site-footer'>
      <span>&copy;dynak.com {year}</span>
      <span onClick={onPrivacyPolicyModalOpenDone}>
        RODO
      </span>
    </footer>
  );
};

export default Footer;
