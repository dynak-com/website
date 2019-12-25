import React, { useState, useEffect } from "react";
import { StyledFooter } from "./footer.styles";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <StyledFooter className="my-2 text-light text-center">
      <span>&copy;dynak.com {year}</span>
    </StyledFooter>
  );
};

export default Footer;
