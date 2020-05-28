import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useComponent } from './hook';
import styles from '../icons-bar/styles.module.css';

export const TeamMember = ({ member }) => {
    const { name, position, linkedInUrl, githubUrl, username } = member;
    const { avatarURL } = useComponent(username);

    return (
        <div className="col-12 mx-auto my-3 col-sm-6 col-lg-4" key={name}>
            <h3>{name}</h3>
            <p className="text-center">{position}</p>
            <img src={avatarURL} alt={name} width="180" height="180" />
            <div className="display-4">
                <a href={linkedInUrl} className="d-inline-block my-2 mx-2">
                    <FontAwesomeIcon className={`${styles.fontIcon}`} icon={faLinkedin} />
                </a>
                <a href={githubUrl} className="d-inline-block my-2 mx-2">
                    <FontAwesomeIcon className={`${styles.fontIcon}`} icon={faGithub} />
                </a>
            </div>
        </div>
    );
};
