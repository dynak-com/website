import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  path {
    color: #fff;
    transition: 0.2s;
  }
  &:hover {
    path {
      color: #ddd;
    }
  }
`;
