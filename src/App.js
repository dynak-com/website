import React from 'react';
import Navbar from './components/navbar/navbar.component';
import { Switch, Route } from 'react-router';
import MainPage from './pages/main-page/main-page.component';
import AboutPage from './pages/about-page/about-page.component';
import ProjectsPage from './pages/projects-page/projects-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import ErrorPage from './pages/error-page/error-page.component';
import Footer from './components/footer/footer.component';
import ModalsContainer from './components/modals-container/modals-container.component';
import content from './content.json';
import './styles.css';
import './internationalization/i18n';

const App = () => {
    const [contentData] = content;
    return (
        <div className={'main-container'}>
            <Navbar content={contentData.nav} targetId="headerNavbarMenu" />
            <Switch>
                <Route exact path="/" component={() => <MainPage content={contentData.home} />} />
                <Route exact path="/about" component={() => <AboutPage content={contentData.about} />} />
                <Route exact path="/projects" component={() => <ProjectsPage content={contentData.projects} />} />
                <Route exact path="/contact" component={() => <ContactPage content={contentData.contact} />} />
                <Route component={() => <ErrorPage content={contentData.error} />} />
            </Switch>
            <Footer />
            <ModalsContainer modalsData={contentData.modal} />
        </div>
    );
};

export default App;
