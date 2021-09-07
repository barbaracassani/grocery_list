import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getItems } from './list.slice';

const List: FunctionComponent<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector((state: RootState) => {
    return state.items;
  });
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return <>I am list</>;
};

export default List;
