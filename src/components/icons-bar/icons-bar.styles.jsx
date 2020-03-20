import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  path {
    color: #fff;
    transition: 0.2s;
  }
  &:hover {
    path {
      color: #ddd;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
