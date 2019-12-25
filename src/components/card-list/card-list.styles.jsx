import styled from "styled-components";

export const StyledCardListContainer = styled.section`
  & > div {
    article {
      color: #ffffff;
      background-color: #3eafad;
      border-radius: 0.5rem;
    }
    &:nth-child(even) {
      article {
        color: #707a7f;
        background-color: #3c4144;
      }
    }
  }
`;

export const StyledProjectsCardListContainer = styled.section`
  & > div {
    article {
      color: #707a7f;
      background-color: rgba(60, 65, 68, 0.8);
      transform: scale(1) skew(-5deg);
    }
    &:nth-child(even) {
      article {
        color: #ffffff;
        background-color: rgba(62, 175, 173, 0.8);
      }
    }
    & > div + div:hover {
      transform: scale(1.02) skew(8deg);
    }
  }
`;

export const StyledCardHeader = styled.div`
  position: relative;
  color: #fff;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2.4rem;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 20vh 0;
  }
`;

export const StyledCardWrapper = styled.div`
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;
