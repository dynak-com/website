import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faNode,
  faGit,
  faGitlab,
  faLinux,
  faWordpressSimple,
  faMagento,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css';

const icons = [
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNode,
  faGit,
  faGitlab,
  faLinux,
  faWordpressSimple,
  faMagento,
  faDocker
];

const AboutPage = props => {
  const { technologies, team, values } = props.content;
  return (
    <section className={ `p-4 ${ styles.aboutPageContainer }` }>
      <div className='row'>
        <div className='d-none d-sm-block col-sm-3 col-md-4 col-xl-2'>
          <img className={ styles.workManImg } src={WorkerImage} alt='Working man :)' />
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
    </section>
  );
};

function onRenderTechIcons() {
  return (
    <div className='d-none d-md-flex display-4 mx-5 row pt-md-1 pt-lg-3 pt-xl-4'>
      {icons.map((icon, index) => (
        <span className='tech-icon col-md-3 col-lg-4 col-xl-2' key={index}>
          <FontAwesomeIcon className={ styles.fontIcon } icon={icon} />
        </span>
      ))}
    </div>
  );
}

export default AboutPage;
