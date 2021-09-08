import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getItems } from './list.slice';
import Item from './item';

const List: FunctionComponent<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector((state: RootState) => {
    return state.items;
  });
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <ul>
      {items?.ids?.length ? (
        items.ids?.map((id) => {
          // @ts-ignore
          return <Item item={items.entities[id]!} key={id} />;
        })
      ) : (
        <li>No items in the list</li>
      )}
    </ul>
  );
};

export default List;
