/* eslint-disable */
import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getItems } from './list.slice';
import Item from './item';
import { ListStyled } from './list.styled';

const List: FunctionComponent<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector((state: RootState) => {
    return state.items;
  });
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const totalPrice = items.ids.reduce((accu: number, id) => {
    const p = items.entities[id]?.price ?? 0;
    accu = accu + p;
    return accu;
  }, 0 as number);

  const orderedItems = useMemo(() => {
    return [...items.ids].sort((a, b) => {
      return items.entities[a]!.createdAt! < items.entities[b]!.createdAt!
        ? 1
        : -1;
    });
  }, [items.ids, items.entities]);

  return (
    <>
    <ListStyled>
      { orderedItems?.length ? (
        orderedItems.map((id) => {
          return <Item item={items.entities[id]!} key={id} />;
        } )
      ) : (
        <li>No items in the list</li>
      )}
    </ListStyled>
      <span>Price: {totalPrice}</span>
    </>
  );
};

export default List;
