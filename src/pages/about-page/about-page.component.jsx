import React from 'react';
import {
  StyledAboutPageContainer,
  StyledWorkingManPicture,
  StyledFontAwesomeIcon
} from './about-page.styles';
import WorkerImage from '../../assets/images/about/worker.png';
import TechnologiesArticle from '../../components/technologies-article/technologies-article.component';
import TeamArticle from '../../components/team-article/team-article.component';
import ValuesArticle from '../../components/values-article/values-article.component';
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  faLinux,
  faWordpress,
  faChrome,
  faFirefoxBrowser,
  faDocker
} from '@fortawesome/free-brands-svg-icons';

const icons = [
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  faLinux,
  faWordpress,
  faChrome,
  faFirefoxBrowser,
  faDocker
];

const AboutPage = props => {
  const { technologies, team, values } = props.content;
  return (
    <StyledAboutPageContainer className='p-4'>
      <div className='row'>
        <div className='d-none d-sm-block col-sm-3 col-md-4 col-xl-2'>
          <StyledWorkingManPicture src={WorkerImage} alt='Working man :)' />
        </div>
        <div className='col-12 col-sm-9 col-md-8 col-xl-10 pt-md-1 pt-xl-4'>
          <TechnologiesArticle technologies={technologies} />
          {onRenderTechIcons()}
        </div>
      </div>
      <div>
        <ValuesArticle values={values} />
        <TeamArticle team={team} />
      </div>
    </StyledAboutPageContainer>
  );
};

function onRenderTechIcons() {
  return (
    <div className='d-none d-md-flex display-4 mx-5 row pt-md-1 pt-xl-4'>
      {icons.map((icon, index) => (
        <span className='col-md-3 col-lg-4 col-xl-2' key={index}>
          <StyledFontAwesomeIcon icon={icon} />
        </span>
      ))}
    </div>
  );
}

export default AboutPage;
