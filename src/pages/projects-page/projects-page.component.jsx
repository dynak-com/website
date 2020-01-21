import React from 'react';
import {
  StyledProjectsPageContainer,
  StyledProjectsPageImageContainer
} from './projects-page.styles';
import Image from '../../assets/images/projects/machine.png';
import CardList from '../../components/card-list/card-list.component';

const ProjectsPage = props => {
  const { header, posts } = props.content;
  const cardsData = {
    posts
  };
  return (
    <StyledProjectsPageContainer>
      <h1 className="text-center">{header}</h1>
      <CardList data={cardsData} />
      <StyledProjectsPageImageContainer>
        <img src={Image} alt="Machine" />
      </StyledProjectsPageImageContainer>
    </StyledProjectsPageContainer>
  );
};

export default ProjectsPage;
