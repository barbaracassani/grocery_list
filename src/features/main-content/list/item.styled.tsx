import styled from 'styled-components';
import { colours, fadeInAndEnterFromTop } from '../../../assets/common-styles';

export const ItemStyled = styled.li`
  margin-bottom: 10px;
  ${fadeInAndEnterFromTop.bind(null, 0.3)};
  &.bought {
    opacity: 0.8;
    text-decoration: line-through;
  }
  & button {
    margin-right: 1rem;
    &.danger {
      background-color: ${colours.highlight};
    }
  }
`;
