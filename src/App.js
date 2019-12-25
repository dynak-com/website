import React from "react";
import Navbar from "./components/navbar/navbar.component";
import { GlobalStyles, StyledAppContainer } from "./app.styles";
import { Switch, Route } from "react-router";
import MainPage from "./pages/main-page/main-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import ProjectsPage from "./pages/projects-page/projects-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import ErrorPage from "./pages/error-page/error-page.component";
import Footer from "./components/footer/footer.component";

const App = () => (
  <StyledAppContainer>
    <GlobalStyles />
    <Navbar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
    <Footer />
  </StyledAppContainer>
);

export default App;
