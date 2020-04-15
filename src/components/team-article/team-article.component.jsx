import React from 'react';
import { TeamMember } from '../TeamMember/index';

const TeamArticle = ({ team }) => {
  const { title, teamData } = team;

  return (
    <React.Fragment>
    <article className='text-center'>
      <h2>{title}</h2>
        <div className='row'>{ teamData.map( member =>
          <TeamMember member={ member } key={ member.name }/>
         )}</div>
      </article>
      </React.Fragment>
  );
};

export default TeamArticle;
