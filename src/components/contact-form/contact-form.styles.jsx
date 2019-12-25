import styled from "styled-components";

export const StyledCheckboxGroupContainer = styled.div`
  & > input,
  & > label {
    cursor: pointer;
  }
`;

export const StyledContactFormButton = styled.input`
  &.btn {
    color: #fff;
    background-color: #3eafad;
    transition: 0.2s;
    &:hover,
    &:focus,
    &:active {
      color: #ddd;
      background-color: #329390;
    }
  }
`;
