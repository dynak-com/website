import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  h1 > span {
    font-size: 2.4rem;
  }
  span {
    transition: 0.3s;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link {
    text-decoration: none;
    &.active > span {
      background-color: #3eafad;
      transform: skew(-12deg);
      @media screen and (max-width: 992px) {
        transform: none;
      }
    }
  }
`;

export default props => <StyledNavLink {...props} />;
