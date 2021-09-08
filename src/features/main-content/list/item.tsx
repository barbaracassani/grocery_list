import React, { FunctionComponent } from 'react';
import { ItemShape } from '../../../app/api';
import Button from '../../../assets/common-components/button';
import { useAppDispatch } from '../../../app/hooks';
import { deleteItem, updateItem } from './list.slice';

interface ItemProps {
  item: ItemShape;
}

const Item: FunctionComponent<ItemProps> = (props) => {
  const { _id, bought } = props.item;
  const dispatch = useAppDispatch();

  return (
    <li className={bought ? 'bought' : ''}>
      {props.item.description}
      <Button
        name="deleteItem"
        testId={`delete-${_id}`}
        onClick={(e) => {
          e.preventDefault();
          dispatch(deleteItem(_id));
        }}
        label="Delete"
      />
      <Button
        name="toggleBought"
        testId={`toggle-bought-${_id}`}
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            updateItem({
              _id,
              bought: !bought
            })
          );
        }}
        label="Toggle bought"
      />
    </li>
  );
};

export default Item;
