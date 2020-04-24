import React from 'react';
import './projects-page.styles.css';
import CardList from '../../components/card-list/card-list.component';

const ProjectsPage = props => {
  const { header, posts } = props.content;
  const cardsData = {
    posts
  };
  return (
    <section className='projects-page-container'>
      <h1 className='text-center'>{header}</h1>
      <CardList data={cardsData} />
    </section>
  );
};

export default ProjectsPage;
