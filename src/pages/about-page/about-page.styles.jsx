import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledAboutPageContainer = styled.section`
  color: #fff;
`;

export const StyledWorkingManPicture = styled.img`
  width: 100%;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
