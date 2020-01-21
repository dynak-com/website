import React from 'react';
import { StyledAboutPageContainer } from './about-page.styles';
import WorkerImage from '../../assets/images/about/worker.png';

const AboutPage = props => {
  const { header, text } = props.content;
  return (
    <StyledAboutPageContainer className="p-4">
      <h2>{header}</h2>
      <img src={WorkerImage} alt="Working man :)" />
      <p>{text}</p>
    </StyledAboutPageContainer>
  );
};

export default AboutPage;
