import React from 'react';
import { StyledArticle } from './technologies-article.styles';

const TechnologiesArticle = ({ technologies }) => {
  const { title, content } = technologies;
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledArticle>
  );
};

export default TechnologiesArticle;
