import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const StyledAppContainer = styled.main`
  min-height: 100vh;
  color: #fff;
  background-color: #32373a;
  @import url('https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap&subset=latin-ext');
  font-family: 'Saira Condensed', sans-serif;
  overflow-x: hidden;
  p {
    text-align: justify;
  }
`;
