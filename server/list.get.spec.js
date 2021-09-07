const listGet = require('./list.get')

describe('the list getter', () => {
  it('returns empty array if no items', async () => {
    const response = await listGet({
      find: jest.fn().mockImplementation((err, cb) => cb(null, []))
    }, {}, {
      send: resp => resp
    })
    expect(response).toEqual([])
  })
  it('returns all the documents', async () => {
    const response = await listGet({
      find: jest.fn().mockImplementation((err, cb) => cb(null, ['item 1', 'item 2']))
    }, {}, {
      send: resp => resp
    })
    expect(response).toEqual(['item 1', 'item 2'])
  })
})
