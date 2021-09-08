import styled from 'styled-components';

export const ItemStyled = styled.li`
  &.bought {
    opacity: 0.8;
    text-decoration: line-through;
  }
  & button {
    margin-right: 1rem;
  }
`;
