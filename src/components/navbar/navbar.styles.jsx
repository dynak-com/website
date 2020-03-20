import styled from 'styled-components';

export const StyledNavBarButton = styled.button``;

export const StyledNavbar = styled.nav`
  background-color: transparent;
  overflow: hidden;
  h1 {
    margin: 0;
    font-size: 2.6rem;
    font-weight: 900;
    font-family: Tenby-five;
    span {
      color: #3eafad;
    }
  }
  span {
    font-size: 1.7rem;
    font-family: Tenby-five;
  }
  ${StyledNavBarButton} {
    border: none;
    outline: none;
  }
`;
