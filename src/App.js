import React from 'react';
import Navbar from './components/navbar/navbar.component';
import { GlobalStyles, StyledAppContainer } from './app.styles';
import { Switch, Route } from 'react-router';
import MainPage from './pages/main-page/main-page.component';
import AboutPage from './pages/about-page/about-page.component';
import ProjectsPage from './pages/projects-page/projects-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import ErrorPage from './pages/error-page/error-page.component';
import Footer from './components/footer/footer.component';
import ModalsContainer from './components/modals-container/modals-container.component';
import useComponent from './hook';
import content from './content.json';
import { StatusPage } from 'react-healthy';

const contentData = JSON.parse(JSON.stringify(content));

const appApis = [
  {
    name: 'server.js',
    endpoint: '/health'
  }
];

const App = () => {
  const { lang } = useComponent();
  const content = contentData.find((item) => item.lang === lang);
  return (
    <StyledAppContainer>
      <GlobalStyles />
      <Navbar content={content.nav} targetId='headerNavbarMenu' />
      <Switch>
        <Route
          exact
          path='/'
          component={() => <MainPage content={content.home} />}
        />
        <Route
          exact
          path='/about'
          component={() => <AboutPage content={content.about} />}
        />
        <Route
          exact
          path='/projects'
          component={() => <ProjectsPage content={content.projects} />}
        />
        <Route
          exact
          path='/contact'
          component={() => <ContactPage content={content.contact} />}
        />
        <Route component={() => <ErrorPage content={content.error} />} />
      </Switch>
      <Footer />
      <ModalsContainer modalsData={content.modal} />
    </StyledAppContainer>
  );
};

export default App;
