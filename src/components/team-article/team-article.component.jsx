import React from 'react';
import TeamMember from './TeamMember';

const TeamArticle = ({ team }) => {
  const { title, teamData } = team;

  return (
    <>
    <article className='text-center'>
      <h2>{title}</h2>
        <div className='row'>{ teamData.map( member =>
          <TeamMember member={ member } key={ member.name }/>
         )}</div>
      </article>
      </>
  );
};

export default TeamArticle;
