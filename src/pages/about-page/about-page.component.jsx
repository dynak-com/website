import React from 'react';
import {
  StyledAboutPageContainer,
  StyledWorkingManPicture
} from './about-page.styles';
import WorkerImage from '../../assets/images/about/worker.png';
import TechnologiesArticle from '../../components/technologies-article/technologies-article.component';
import TeamArticle from '../../components/team-article/team-article.component';
import ValuesArticle from '../../components/values-article/values-article.component';

const AboutPage = props => {
  const { header, technologies, team, values } = props.content;
  return (
    <StyledAboutPageContainer className='p-4'>
      <div>
        <h2>{header}</h2>
        <StyledWorkingManPicture src={WorkerImage} alt='Working man :)' />
      </div>
      <div>
        <TechnologiesArticle technologies={technologies} />
        <TeamArticle team={team} />
        <ValuesArticle values={values} />
      </div>
    </StyledAboutPageContainer>
  );
};

export default AboutPage;
