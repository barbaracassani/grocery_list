const request = require('supertest');
const app = require('./server')

describe('the grocery server', () => {
  describe('the list route', () => {
    it('responds with 200', (done) => {
      request(app)
        .get('/list')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(done);
    })
  })
  describe('the post item route', () => {
    it('responds with 201', (done) => {
      request(app)
        .post('/list/item')
        .send({_id: 123})
        .expect(201)
        .end(done);
    })
  })
  describe('the put item route', () => {
    it('responds with 204', (done) => {
      request(app)
        .put('/list/123', {})
        .send({_id: 123})
        .expect(204)
        .end(done);
    })
  })
  describe('the delete item route', () => {
    it('responds with 204', (done) => {
      request(app)
        .delete('/list/123')
        .expect(204)
        .end(done);
    })
  })
})
