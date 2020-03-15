import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { StyledFooter } from './footer.styles';
import { modalPrivacyPolicyRef } from '../modals-container/modals-container.component';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <StyledFooter className='my-2 text-light text-center'>
      <span>&copy;dynak.com {year}</span>
      <span className='ml-2' onClick={onPrivacyPolicyModalOpen}>
        RODO
      </span>
    </StyledFooter>
  );
};

function onPrivacyPolicyModalOpen() {
  $(ReactDOM.findDOMNode(modalPrivacyPolicyRef.current)).modal();
}

export default Footer;
