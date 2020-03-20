import React from 'react';
import { StyledFooter } from './footer.styles';
import useComponent from './hook';

const Footer = () => {
  const { year, onPrivacyPolicyModalOpenDone } = useComponent();
  return (
    <StyledFooter className='my-2 text-light text-center'>
      <span>&copy;dynak.com {year}</span>
      <span className='ml-2' onClick={onPrivacyPolicyModalOpenDone}>
        RODO
      </span>
    </StyledFooter>
  );
};

export default Footer;
