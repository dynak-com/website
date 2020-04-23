import React from 'react';
import { FontAwesomeIcon as StyledFontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';
import './icons-bar.styles.css'

const IconsBar = () => {
  return (
    <div className='display-4 w-50 mx-auto mb-5 row'>
      <a
        href='https://pl.linkedin.com/company/dynak-com?trk=public_profile_topcard_current_company'
        className='col-4'
      >
        <StyledFontAwesomeIcon icon={ faLinkedin }>
          <svg className='font-icon'></svg>
        </StyledFontAwesomeIcon>
      </a>
      <a href='https://github.com/dynak-com' className='col-4'>
        <StyledFontAwesomeIcon className='font-icon' icon={faGithub} />
      </a>
      <a href='https://gitlab.com/dynak.com' className='col-4'>
        <StyledFontAwesomeIcon className='font-icon' icon={faGitlab} />
      </a>
    </div>
  );
};

export default IconsBar;
