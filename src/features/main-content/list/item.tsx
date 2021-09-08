import React, { FunctionComponent, useCallback } from 'react';
import { ItemShape } from '../../../app/api';
import Button from '../../../assets/common-components/button';
import { useAppDispatch } from '../../../app/hooks';
import { deleteItem, updateItem } from './list.slice';
import { ItemStyled } from './item.styled';

interface ItemProps {
  item: ItemShape;
}

const Item: FunctionComponent<ItemProps> = (props) => {
  const { _id, bought } = props.item;
  const dispatch = useAppDispatch();

  return (
    <ItemStyled className={bought ? 'bought' : ''}>
      <Button
        className="danger"
        name="deleteItem"
        testId={`delete-${_id}`}
        onClick={useCallback(
          (e) => {
            e.preventDefault();
            dispatch(deleteItem(_id));
          },
          [_id]
        )}
        label="Delete"
      />
      <Button
        name="toggleBought"
        testId={`toggle-bought-${_id}`}
        onClick={useCallback(
          (e) => {
            e.preventDefault();
            dispatch(
              updateItem({
                _id,
                bought: !bought
              })
            );
          },
          [_id, bought]
        )}
        label="Toggle bought"
      />
      {props.item.description}
    </ItemStyled>
  );
};

export default Item;
