import React from "react";
import { StyledCard } from "./card.styles";

const Card = ({ textContent }) => {
  return (
    <StyledCard>
      <p className="p-2">{textContent}</p>
      <span className="text-right mr-3">></span>
    </StyledCard>
  );
};

export default Card;
