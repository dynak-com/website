import React from 'react';
import { StyledFontAwesomeIcon } from './icons-bar.styles';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';

const IconsBar = () => {
  return (
    <div className='display-4 mx-5 mb-md-5 row'>
      <a
        href='https://pl.linkedin.com/company/dynak-com?trk=public_profile_topcard_current_company'
        className='col-6 col-md-4 col-lg-2'
      >
        <StyledFontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/' className='col-6 col-md-4 col-lg-2'>
        <StyledFontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href='https://gitlab.com/dynak.com'
        className='col-6 col-md-4 col-lg-2'
      >
        <StyledFontAwesomeIcon icon={faGitlab} />
      </a>
      <a href='https://twitter.com/' className='col-6 col-md-4 col-lg-2'>
        <StyledFontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='https://facebook.com/' className='col-6 col-md-4 col-lg-2'>
        <StyledFontAwesomeIcon icon={faFacebook} />
      </a>
      <a href='https://instagram.com/' className='col-6 col-md-4 col-lg-2'>
        <StyledFontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default IconsBar;
