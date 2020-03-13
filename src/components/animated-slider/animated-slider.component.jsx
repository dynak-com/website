import React from 'react';
import { StyledAnimatedSlider } from './animated-slider.styles';
import Image from '../../assets/images/home/slider2X_750px.png';

const AnimatedSlider = () => {
  return (
    <StyledAnimatedSlider>
      <img src={Image} alt='We at work ;)' />
    </StyledAnimatedSlider>
  );
};

export default AnimatedSlider;
