import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const StyledAppContainer = styled.main`
  color: #fff;
  background-color: #32373a;
  font-family: refrigerator-deluxe, sans-serif;
  overflow-x: hidden;
`;
