import React, { FunctionComponent, SyntheticEvent } from 'react';
import { ButtonStyled } from './button.styled';

interface ButtonProps {
  id?: string;
  name: string;
  testId: string;
  onClick: (e: SyntheticEvent) => void;
  label: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  id,
  name,
  testId,
  onClick,
  label
}) => {
  return (
    <ButtonStyled id={id} name={name} data-testid={testId} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
export default Button;
