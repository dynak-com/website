import React from 'react';
import { StyledLink } from './team-article.styles';
import { StyledFontAwesomeIcon } from '../icons-bar/icons-bar.styles';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const TeamArticle = ({ team }) => {
  const { title, teamData } = team;
  return (
    <article>
      <h3>{title}</h3>
      <div className='row'>{renderTeamMembers(teamData)}</div>
    </article>
  );
};

function renderTeamMembers(teamData) {
  return teamData.map(member => {
    const { name, picture, linkedInUrl, githubUrl } = member;
    return (
      <div className='col-12 mx-auto my-3 col-sm-6 col-lg-4' key={name}>
        <h4>{name}</h4>
        <img src={picture} alt={name} />
        <div className='display-4'>
          <StyledLink href={linkedInUrl} className='d-inline-block my-2 mx-2'>
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </StyledLink>
          <StyledLink href={githubUrl} className='d-inline-block my-2 mx-2'>
            <StyledFontAwesomeIcon icon={faGithub} />
          </StyledLink>
        </div>
      </div>
    );
  });
}

export default TeamArticle;
