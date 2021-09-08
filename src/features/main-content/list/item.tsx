import React, { FunctionComponent } from 'react';
import { ItemShape } from '../../../app/api';

interface ItemProps {
  item: ItemShape;
}

const Item: FunctionComponent<ItemProps> = (props) => {
  return <li>{props.item.description}</li>;
};

export default Item;
