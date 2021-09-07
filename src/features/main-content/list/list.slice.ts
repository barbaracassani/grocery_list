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

export const itemsAdapter = createEntityAdapter<ItemShape>({
  selectId: (item) => item._id
});

const initialState = itemsAdapter.getInitialState({
  loading: 'idle'
});

export const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    markLoadingAsIdle(state, action) {
      state.loading = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.loading = 'idle';
      const items = action.payload as ItemShape[];
      itemsAdapter.upsertMany(state, items);
    });
    builder.addCase(getItems.pending, (state, action) => {
      state.loading = 'pending';
    });
  }
});

const reducer = slice.reducer;
export const { markLoadingAsIdle } = slice.actions;
export default reducer;
