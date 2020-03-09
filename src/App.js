import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.component';
import { GlobalStyles, StyledAppContainer } from './app.styles';
import { Switch, Route } from 'react-router';
import MainPage from './pages/main-page/main-page.component';
import AboutPage from './pages/about-page/about-page.component';
import ProjectsPage from './pages/projects-page/projects-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import ErrorPage from './pages/error-page/error-page.component';
import Footer from './components/footer/footer.component';
import content from './content.json';

const contentData = JSON.parse(JSON.stringify(content));

class App extends Component {
  state = {
    lang: 'pl'
  };
  content = contentData.find(item => item.lang === this.state.lang);
  render() {
    return (
      <StyledAppContainer>
        <GlobalStyles />
        <Navbar content={this.content.nav} targetId='headerNavbarMenu' />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <MainPage content={this.content.home} />}
          />
          <Route
            exact
            path='/about'
            component={() => <AboutPage content={this.content.about} />}
          />
          <Route
            exact
            path='/projects'
            component={() => <ProjectsPage content={this.content.projects} />}
          />
          <Route
            exact
            path='/contact'
            component={() => <ContactPage content={this.content.contact} />}
          />
          <Route component={() => <ErrorPage content={this.content.error} />} />
        </Switch>
        <Footer />
      </StyledAppContainer>
    );
  }
}

export default App;
