import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100%;
  overflow: hidden;
  ol {
    li {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: transparent;
      border: 3px solid #000;
      transition: 0.2s;
      &.active {
        background-color: #000;
      }
      &:hover {
        box-shadow: 0 0 0 1px #000;
      }
    }
  }
`;
