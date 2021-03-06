import React from 'react';
import styles from './styles.module.css';

const ValuesArticle = ({ values }) => {
  const { title, content } = values;
  return (
    <article className='mb-3'>
      <h2 className='text-center'>{title}</h2>
      {renderValuesParagraph(content)}
    </article>
  );
};

function renderValuesParagraph ( valuesData )
{
  return valuesData.map( ( paragraph, index ) => (
    <span
      className={ `${ styles.valueArticle } d-block my-2 text-justify`}
      key={`values-paragraph-${index}`}
    >
      {paragraph}
    </span>
  ));
}

export default ValuesArticle;
