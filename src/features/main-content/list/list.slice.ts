import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';

import api, { ItemShape } from '../../../app/api';

export const getItems = createAsyncThunk(
  'list/get',
  async (_, thunkAPI): Promise<ItemShape[]> => {
    return await api.getItems();
  }
);
export const addItem = createAsyncThunk(
  'item/add',
  async (item: Omit<ItemShape, '_id'>, _thunkAPI): Promise<ItemShape> => {
    // the reducer should cater for rejected state as well, and we have also rejectWithValue here to decorate the error if needed
    // however I am not going to do it
    return await api.postItem(item);
  }
);
export const updateItem = createAsyncThunk(
  'item/update',
  async (
    item: Partial<ItemShape>,
    _thunkAPI
  ): Promise<Partial<Omit<ItemShape, '_id'> & { id: string }>> => {
    const { _id } = item;
    await api.putItem(_id!, item);
    return item;
  }
);
export const deleteItem = createAsyncThunk(
  'item/delete',
  async (_id: string, thunkAPI): Promise<string> => {
    await api.deleteItem(_id);
    return _id;
  }
);

export const itemsAdapter = createEntityAdapter<ItemShape>({
  selectId: (item) => item._id
});

const initialState = itemsAdapter.getInitialState({
  loading: 'idle'
});

export const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.loading = 'idle';
      const items = action.payload as ItemShape[];
      itemsAdapter.setAll(state, items);
    });
    builder.addCase(getItems.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      itemsAdapter.upsertOne(state, action.payload);
    });
    builder.addCase(updateItem.fulfilled, (state, action) => {
      // todo fix this
      // @ts-ignore
      itemsAdapter.upsertOne(state, action.payload);
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      console.info('will remove', action.payload);
      itemsAdapter.removeOne(state, action.payload);
    });
  }
});

const reducer = slice.reducer;
export default reducer;
