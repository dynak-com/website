import React from 'react';
import './footer.styles.css';
import useComponent from './hook';

const Footer = () => {
  const { year, onPrivacyPolicyModalOpenDone } = useComponent();
  return (
    <footer className='my-2 text-light text-center'>
      <span >&copy;dynak.com {year}</span>
      <span id='custom-styled-span' className='ml-2' onClick={onPrivacyPolicyModalOpenDone}>
        RODO
      </span>
    </footer>
  );
};

export default Footer;
