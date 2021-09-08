import React, { FunctionComponent, SyntheticEvent, useState } from 'react';

import Button from '../../../assets/common-components/button';
import { FormStyled, InputStyled } from './form.styled';
import { useAppDispatch } from '../../../app/hooks';
import { addItem } from '../list/list.slice';

const Form: FunctionComponent<{}> = () => {
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  return (
    <FormStyled>
      <InputStyled
        data-testid="input-text-box"
        value={description}
        type="text"
        onChange={(e: SyntheticEvent) => {
          const target = e.target as HTMLInputElement;
          setDescription(target.value);
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (description) {
            dispatch(
              addItem({
                description,
                bought: false
              })
            );
            setDescription('');
          }
        }}
        testId="add-button"
        name="add-button"
        label="Add"
      />
    </FormStyled>
  );
};

export default Form;
