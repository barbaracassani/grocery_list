import styled from 'styled-components';
import { colours } from '../common-styles';

export const ButtonStyled = styled.button`
  border: 0;
  background: ${colours.blue};
  box-shadow: none;
  border-radius: 5px;
  font-size: 1.4rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: ${colours.light};
    color: ${colours.dark};
  }
  &.danger:hover {
    background: ${colours.dark};
    color: ${colours.highlight};
  }
`;
