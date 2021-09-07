const itemPost = require('./item.post');

describe('the item post', () => {
  let mockInsert
  const mockResponse = {
    status: () => {
      return { send: resp => resp }
    }
  }
  beforeEach(() => {
    mockInsert = jest.fn().mockImplementation((item, cb) => cb(null, {
      _id: 5,
      title: 'new doc'
    }))
  })
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('inserts the item', async () => {
    await itemPost({
      insert: mockInsert
    }, {
      body: {
        title: 'new doc'
      }
    }, mockResponse)
    expect(mockInsert).toHaveBeenCalledWith({ title: 'new doc' }, expect.any(Function))
  })
  it('returns the new doc', async () => {
    const response = await itemPost({
      insert: mockInsert
    }, {
      params: {
        id: 543
      }
    }, mockResponse)
    expect(response).toEqual({
      _id: 5,
      title: 'new doc'
    })
  })
})
