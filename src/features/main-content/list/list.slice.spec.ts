import reducer, { getItems } from './list.slice';
import { store } from '../../../app/store';
import sampleData from '../../../../server/sampleData.json';

import * as api from '../../../app/api';

describe('the items slice', () => {
  let mockApi: jest.Mocked<typeof api>;
  beforeEach(() => {
    mockApi = api as jest.Mocked<typeof api>;
    mockApi.default.getItems = jest.fn().mockResolvedValue(sampleData);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('calls getItems on the api', async () => {
    const thunk = getItems();
    await thunk(
      () => {},
      () => {
        return [];
      },
      {}
    );
    expect(mockApi.default.getItems).toHaveBeenNthCalledWith(1);
  });
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {
        type: 'list/get'
      })
    ).toEqual({
      loading: 'idle',
      entities: {},
      ids: []
    });
  });
  describe('actions', () => {
    it('creates the action types', () => {
      expect(getItems.fulfilled.type).toBe('list/get/fulfilled');
      expect(getItems.pending.type).toBe('list/get/pending');
    });
    it('#getItems', async () => {
      await store.dispatch(getItems());
      const state = store.getState().items;
      expect(state).toEqual({
        loading: 'idle',
        ids: sampleData.map((item) => item._id),
        entities: sampleData.reduce((accu, item) => {
          accu[item._id] = item;
          return accu;
        }, {} as { [key: string]: any })
      });
    });
    it('#getItems pending then fulfilled', async () => {
      jest.spyOn(store, 'dispatch');
      const thunk = getItems();
      await thunk(
        store.dispatch,
        () => {
          return [];
        },
        {}
      );
      expect(store.dispatch).toHaveBeenNthCalledWith(1, {
        meta: expect.any(Object),
        payload: undefined,
        type: 'list/get/pending'
      });
      expect(store.dispatch).toHaveBeenNthCalledWith(2, {
        meta: expect.any(Object),
        payload: expect.any(Object),
        type: 'list/get/fulfilled'
      });
    });
  });
});
