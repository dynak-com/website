import React from 'react';
import { StyledFontAwesomeIcon } from '../icons-bar/icons-bar.styles';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const TeamArticle = ({ team }) => {
  const { title, teamData } = team;
  return (
    <article className='text-center'>
      <h2>{title}</h2>
      <div className='row'>{onRenderTeamMembers(teamData)}</div>
    </article>
  );
};

function onRenderTeamMembers(teamData) {
  return teamData.map(member => {
    const { name, picture, position, linkedInUrl, githubUrl } = member;
    return (
      <div className='col-12 mx-auto my-3 col-sm-6 col-lg-4' key={name}>
        <h3>{name}</h3>
        <p className='text-center'>{position}</p>
        <img src={picture} alt={name} />
        <div className='display-4'>
          <a href={linkedInUrl} className='d-inline-block my-2 mx-2'>
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={githubUrl} className='d-inline-block my-2 mx-2'>
            <StyledFontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    );
  });
}

export default TeamArticle;
