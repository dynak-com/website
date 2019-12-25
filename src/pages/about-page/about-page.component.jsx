import React from "react";
import { StyledAboutPageContainer } from "./about-page.styles";
import WorkerImage from "../../assets/images/about/worker.png";

const AboutPage = () => {
  const shortText =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmon tempor invidunt ut labore et";
  const longerText =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos";
  return (
    <StyledAboutPageContainer className="p-4">
      <h2>{shortText}</h2>
      <img src={WorkerImage} alt="Working man :)" />
      <p>{longerText}</p>
    </StyledAboutPageContainer>
  );
};

export default AboutPage;
