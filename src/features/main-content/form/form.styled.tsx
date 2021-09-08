import styled from 'styled-components';
import { breakpoints } from '../../../assets/common-styles';

export const FormStyled = styled.form`
  & button {
    margin-left: 10px;
  }
`;

export const InputStyled = styled.input`
  font-size: 2rem;
  border-radius: 10px;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  @media ${breakpoints.smallAndMedium} {
    max-width: 60%;
  }
`;
