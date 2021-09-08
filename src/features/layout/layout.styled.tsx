import styled from 'styled-components';
import { breakpoints } from '../../assets/common-styles';

export const LayoutStyled = styled.div`
  display: flex;
  gap: 3%;
  flex-wrap: wrap;
  & .slot-for-header {
    background-color: #ffccdd;
    flex-basis: 100%;
  }
  & .slot-for-filter {
    flex-basis: 25%;
    align-items: flex-start;
    @media ${breakpoints.smallAndMedium} { flex-basis: 100% }
    font-size: 1.5rem;
  }
  }
  & .slot-for-main-content {
    flex-basis: 72%;
    @media ${breakpoints.smallAndMedium} { flex-basis: 100% }
    font-size: 1.5rem;
  }
`;
