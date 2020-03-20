import styled, { createGlobalStyle } from 'styled-components';

export const highestLevelContainersCommonStyles = `
  color: #fff;
  background-color: #32373a;
  @import url('https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap&subset=latin-ext');
  font-family: 'Saira Condensed', sans-serif;
  overflow-x: hidden;
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
  }
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 15px;
    background-color: #32373A;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #3eafad;
    border-radius: 10px;
  }
`;

export const StyledAppContainer = styled.main`
  min-height: 100vh;
  ${highestLevelContainersCommonStyles}
`;
