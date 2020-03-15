import styled from 'styled-components';

export const StyledFooter = styled.footer`
  span {
    font-size: 1.2rem;
    font-family: Tenby-five;
  }
  span:last-child {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #ddd;
    }
  }
`;
