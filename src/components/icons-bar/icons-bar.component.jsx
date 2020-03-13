import React from 'react';
import { StyledFontAwesomeIcon } from './icons-bar.styles';
import {
  faLinkedin,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';

const IconsBar = () => {
  return (
    <div className='display-4 w-50 mx-auto mb-5 row'>
      <a
        href='https://pl.linkedin.com/company/dynak-com?trk=public_profile_topcard_current_company'
        className='col'
      >
        <StyledFontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/dynak-com' className='col'>
        <StyledFontAwesomeIcon icon={faGithub} />
      </a>
      <a href='https://gitlab.com/dynak.com' className='col'>
        <StyledFontAwesomeIcon icon={faGitlab} />
      </a>
    </div>
  );
};

export default IconsBar;
