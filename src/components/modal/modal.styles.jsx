import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  &.modal.show .modal-dialog,
  &.modal.fade .modal-dialog {
    /* transform: translateY(-50%); */
  }
  & > div {
    display: table;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }
`;

export const StyledModalDialog = styled.div`
  display: table-cell;
  vertical-align: middle;
  pointer-events: none;
  & > div {
    width: inherit;
    max-width: inherit;
    margin: 0 auto;
    pointer-events: all;
    background-color: #32373a;
    span {
      color: #fff;
    }
    div:last-child > button {
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
  }
`;
