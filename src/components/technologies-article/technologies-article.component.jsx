import React from 'react';

const TechnologiesArticle = ({ technologies }) => {
  const { title, content } = technologies;
  return (
    <article>
      <h2 className='text-center text-sm-left'>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default TechnologiesArticle;
