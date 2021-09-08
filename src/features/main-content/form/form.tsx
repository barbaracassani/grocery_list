import React, { FunctionComponent, SyntheticEvent, useState } from 'react';

import Button from '../../../assets/common-components/button';
import { InputStyled } from './form.styled';
import { useAppDispatch } from '../../../app/hooks';
import { addItem } from '../list/list.slice';

const Form: FunctionComponent<{}> = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form>
      <InputStyled
        data-testid="input-text-box"
        value={value}
        type="text"
        onChange={(e: SyntheticEvent) => {
          const target = e.target as HTMLInputElement;
          setValue(target.value);
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addItem({
              description: value,
              bought: false
            })
          );
          setValue('');
        }}
        testId="add-button"
        name="add-button"
        label="Add"
      />
    </form>
  );
};

export default Form;
