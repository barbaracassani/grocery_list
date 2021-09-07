const itemPut = require('./item.put');

describe('the item put', () => {
  let mockUpdate;
  const mockResponse = {
    status: () => {
      return { send: (resp) => resp };
    }
  };
  beforeEach(() => {
    mockUpdate = jest
      .fn()
      .mockImplementation((_filter, _update, _mode, cb) => cb(null, 1));
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('updates the item', async () => {
    await itemPut(
      {
        update: mockUpdate
      },
      {
        params: {
          item: 543
        },
        body: {
          bought: true
        }
      },
      mockResponse
    );
    expect(mockUpdate).toHaveBeenCalledWith(
      { _id: 543 },
      expect.any(Object),
      { multi: false },
      expect.any(Function)
    );
  });
  it('returns 1', async () => {
    const response = await itemPut(
      {
        update: mockUpdate
      },
      {
        params: {
          item: 543
        },
        body: {
          bought: false
        }
      },
      mockResponse
    );
    expect(response).toEqual('1');
  });
});
