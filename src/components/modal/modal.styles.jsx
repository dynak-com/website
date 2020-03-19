import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  &.modal.show .modal-dialog,
  &.modal.fade .modal-dialog {
    transform: translateY(-50%);
  }
`;

export const StyledModalDialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
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
