import styled from 'styled-components';
import { breakpoints, colours } from '../../assets/common-styles';

export const FilterStyled = styled.div`
  background-color: ${colours.dark};
  color: ${colours.light};
  @media ${breakpoints.big} {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  padding: 2rem;
`;
