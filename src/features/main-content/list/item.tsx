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
          // eslint-disable-next-line react-hooks/exhaustive-deps -- dispatch is generally safe to omit
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
          // eslint-disable-next-line react-hooks/exhaustive-deps -- dispatch is generally safe to omit
          [_id, bought]
        )}
        label="Toggle bought"
      />
      {props.item.description}
      <span>{props.item.price}</span>
    </ItemStyled>
  );
};

export default Item;
