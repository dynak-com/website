import styled from 'styled-components';
import Image from '../../assets/images/home/slider2X_750px.png';

export const StyledAnimatedSlider = styled.div`
  overflow: hidden;
`;

export const StyledImageContainer = styled.div`
  height: 65vh;
  width: calc(100 * 100vw);
  background-image: url(${Image});
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-attachment: local;
  animation: slide 3600s linear infinite;
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
