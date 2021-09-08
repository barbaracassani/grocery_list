import styled from 'styled-components';

import { breakpoints, colours } from '../../assets/common-styles';

export const MainContentStyled = styled.div`
  background-color: ${colours.dark};
  color: ${colours.light};
  @media ${breakpoints.big} {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  padding: 2rem;
`;
