const itemDelete = require('./item.delete');

describe('the item delete', () => {
  let mockRemove;
  const mockResponse = {
    status: () => {
      return { send: (resp) => resp };
    }
  };
  beforeEach(() => {
    mockRemove = jest
      .fn()
      .mockImplementation((id, _options, cb) => cb(null, '1'));
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('removes the item', async () => {
    await itemDelete(
      {
        remove: mockRemove
      },
      {
        params: {
          item: 23
        }
      },
      mockResponse
    );
    expect(mockRemove).toHaveBeenCalledWith(
      { _id: 23 },
      {},
      expect.any(Function)
    );
  });
  it('returns the new doc', async () => {
    const response = await itemDelete(
      {
        remove: mockRemove
      },
      {
        params: {
          item: 543
        }
      },
      mockResponse
    );
    expect(response).toEqual('1');
  });
});
