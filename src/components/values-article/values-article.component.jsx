import React from 'react';
import { StyledSpan } from './values-article.styles';

const ValuesArticle = ({ values }) => {
  const { title, content } = values;
  return (
    <article className='mb-3'>
      <h2 className='text-center'>{title}</h2>
      {renderValuesParagraph(content)}
    </article>
  );
};

function renderValuesParagraph(valuesData) {
  return valuesData.map((paragraph, index) => (
    <StyledSpan
      className='d-block my-2 text-justify'
      key={`values-paragraph-${index}`}
    >
      {paragraph}
    </StyledSpan>
  ));
}

export default ValuesArticle;
