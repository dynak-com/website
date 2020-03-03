import styled from 'styled-components';

export const StyledArticle = styled.article`
  margin: 5vh 0;
  p {
    text-align: justify;
  }
  @media (min-width: 576px) {
    width: 45%;
    margin: 25vh 0 50vh auto;
    text-align: right;
    p {
      text-align: right;
    }
  }
  @media (min-width: 854px) {
    width: 65%;
    margin: 25vh 0 50vh auto;
  }
  @media (min-width: 1024px) {
    margin: 35vh 0 45vh auto;
  }
  @media (min-width: 600px) and (orientation: portrait) {
    width: 35%;
    margin: 35vh 0 40vh auto;
  }
  @media (width: 640px) and (height: 360px),
    (width: 640px) and (height: 384px),
    (width: 736px) and (height: 414px) {
    width: 65%;
    margin: 25vh 0 25vh auto;
    text-align: right;
    p {
      text-align: right;
    }
  }
  @media (width: 1024px) and (orientation: portrait) {
    margin-bottom: 45vh;
  }
`;
