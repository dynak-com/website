import React from 'react';
import { StyledProjectsPageContainer } from './projects-page.styles';
import CardList from '../../components/card-list/card-list.component';

const ProjectsPage = props => {
  const { header, posts } = props.content;
  const cardsData = {
    posts
  };
  return (
    <StyledProjectsPageContainer>
      <h1 className='text-center'>{header}</h1>
      <CardList data={cardsData} />
    </StyledProjectsPageContainer>
  );
};

export default ProjectsPage;
