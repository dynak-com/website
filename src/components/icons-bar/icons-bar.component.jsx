import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';

const IconsBar = () => {
  return (
    <div className='display-4 w-50 mx-auto mb-5 row'>
      <a
        href='https://pl.linkedin.com/company/dynak-com?trk=public_profile_topcard_current_company'
        className='col-4'
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.fontAwesome} />
      </a>
      <a href='https://github.com/dynak-com' className='col-4'>
        <FontAwesomeIcon icon={faGithub} className={styles.fontAwesome} />
      </a>
      <a href='https://gitlab.com/dynak.com' className='col-4'>
        <FontAwesomeIcon icon={faGitlab} className={styles.fontAwesome} />
      </a>
    </div>
  );
};

export default IconsBar;
