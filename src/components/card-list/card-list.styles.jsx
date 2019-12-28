import styled from "styled-components";

export const StyledCardListContainer = styled.section`
  & > div {
    & > div + div:hover {
      transform: scale(1.02) skew(-5deg);
    }
    article {
      color: #707a7f;
      background-color: rgba(60, 65, 68);
      opacity: 0.8;
      transition: 0.8s;
      &:hover {
        opacity: 1;
      }
    }
    &:nth-child(even) {
      article {
        color: #ffffff;
        background-color: rgba(62, 175, 173);
      }
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
