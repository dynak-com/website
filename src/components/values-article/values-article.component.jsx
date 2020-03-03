import React from 'react';
import { StyledValuesArticleContainer } from './values-article.styles';

const ValuesArticle = ({ values }) => {
  const { title, content } = values;
  return (
    <StyledValuesArticleContainer className='mt-5'>
      <h3>{title}</h3>
      {renderValuesParagraph(content)}
    </StyledValuesArticleContainer>
  );
};

function renderValuesParagraph(valuesData) {
  return valuesData.map((paragraph, index) => (
    <p className='my-5' key={`values-paragraph-${index}`}>
      {paragraph}
    </p>
  ));
}

export default ValuesArticle;
