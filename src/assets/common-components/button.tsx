import React, { FunctionComponent, SyntheticEvent } from 'react';

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
    <button id={id} name={name} data-testid={testId} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
