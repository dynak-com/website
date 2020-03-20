import styled from 'styled-components';

export const StyledProjectsPageContainer = styled.section`
  position: relative;
  z-index: 2;
`;

export const StyledProjectsPageImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  z-index: -1;
  overflow: hidden;
  @media (min-width: 750px) {
    right: -25%;
    height: 80%;
  }
  @media (min-width: 992px) {
    height: 90%;
  }
`;
