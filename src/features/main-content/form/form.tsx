import React, { FunctionComponent, SyntheticEvent, useState } from 'react';

import Button from '../../../assets/common-components/button';
import { FormStyled, InputStyled } from './form.styled';
import { useAppDispatch } from '../../../app/hooks';
import { addItem } from '../list/list.slice';

const Form: FunctionComponent<{}> = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | undefined>(undefined);
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
      <InputStyled
        data-testid="price-box-id"
        value={String(price)}
        type="number"
        onChange={(e: SyntheticEvent) => {
          const target = e.target as HTMLInputElement;
          setPrice(parseInt(target.value, 10));
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (description) {
            dispatch(
              addItem({
                description,
                price,
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
