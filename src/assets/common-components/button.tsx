import React, { FunctionComponent, SyntheticEvent } from 'react';
import { ButtonStyled } from './button.styled';

interface ButtonProps {
  id?: string;
  name: string;
  testId: string;
  onClick: (e: SyntheticEvent) => void;
  label: string;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  id,
  name,
  testId,
  onClick,
  label,
  className
}) => {
  return (
    <ButtonStyled
      className={className ?? ''}
      id={id}
      name={name}
      data-testid={testId}
      onClick={onClick}
    >
      {label}
    </ButtonStyled>
  );
};
export default Button;
