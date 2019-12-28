import React from "react";
import {
  StyledProjectsPageContainer,
  StyledProjectsPageImageContainer
} from "./projects-page.styles";
import Image from "../../assets/images/projects/machine.png";
import CardList from "../../components/card-list/card-list.component";

const ProjectsPage = () => {
  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing eltir, sed diam nonumy epirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos";
  const headerText = "Lorem ipsum dolor sit amet, consetetur";
  const cardsData = {
    posts: [
      {
        id: 1,
        text,
        headerText
      },
      {
        id: 2,
        text,
        headerText
      },
      {
        id: 3,
        text,
        headerText
      },
      {
        id: 4,
        text,
        headerText
      },
      {
        id: 5,
        text,
        headerText
      }
    ]
  };
  return (
    <StyledProjectsPageContainer>
      <h1 className="text-center">Nasze projekty:</h1>
      <CardList data={cardsData} />
      <StyledProjectsPageImageContainer>
        <img src={Image} alt="Machine" />
      </StyledProjectsPageImageContainer>
    </StyledProjectsPageContainer>
  );
};

export default ProjectsPage;
