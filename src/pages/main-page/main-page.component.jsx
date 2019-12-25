import React from "react";
import Slider from "../../components/slider/slider.component";
import { StyledMainPageContainer } from "./main-page.styles";
import CardList from "../../components/card-list/card-list.component";

const MainPage = () => {
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
      }
    ]
  };
  return (
    <StyledMainPageContainer>
      <Slider />
      <h1 className="text-center text-light d-block my-5">
        Pracuj z nami - szybciej!
      </h1>
      <CardList data={cardsData} />
    </StyledMainPageContainer>
  );
};

export default MainPage;
