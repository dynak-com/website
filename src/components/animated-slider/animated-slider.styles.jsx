import styled from 'styled-components';

export const StyledAnimatedSlider = styled.div`
  position: relative;
  height: 65vh;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    animation: animation 90s 2.5s linear infinite;
  }
  @keyframes animation {
    0% {
      left: 0;
    }
    85% {
      left: -100%;
    }
    90% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }
`;
