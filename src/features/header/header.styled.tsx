import styled from 'styled-components';
import { colours } from '../../assets/common-styles';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colours.blue};
  & img {
    max-width: 25%;
  }
  & h1 {
    color: ${colours.light};
    margin-right: 3rem;
  }
`;
