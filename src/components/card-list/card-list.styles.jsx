import styled from 'styled-components';

export const StyledCardListContainer = styled.section`
  section > div {
    article {
      background-color: rgba(60, 65, 68);
      opacity: 0.8;
    }
    &: nth-child(even) {
      article {
        color: #ffffff;
        background-color: rgba(62, 175, 173);
      }
    }
    @media screen and (min-width: 1025px) {
      & > div + div:hover {
        transform: scale(1.02) skew(-5deg);
      }
    }
  }
`;

export const StyledCardHeader = styled.div`
  position: relative;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  @media (max-width: 767px) {
    margin-bottom: 10vh;
    padding: 20vh 0;
  }
`;

export const StyledCardWrapper = styled.div`
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;
