import styled from 'styled-components';

export const StyledCheckboxGroupContainer = styled.div`
  & > input,
  & > label {
    cursor: pointer;
  }
`;

export const StyledContactFormButton = styled.input`
  &[type='button'],
  &[type='submit'] {
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
