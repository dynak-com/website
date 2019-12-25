import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
  background-color: transparent;
  overflow: hidden;
  h1 {
    margin: 0;
    font-size: 2.6rem;
    font-weight: 900;
    font-family: Tenby-five;
    cursor: pointer;
    span {
      color: #3eafad;
    }
  }
  span {
    font-size: 1.7rem;
    font-family: Tenby-five;
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
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
    }
  }
`;

export default props => <StyledNavLink {...props} />;
