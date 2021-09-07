const express = require('express');
const cors = require('cors');
const Datastore = require('nedb');
const sampleData = require('./sampleData.json');

const itemPost = require('./item.post');
const itemListGet = require('./list.get');
const itemPut = require('./item.put');
const itemDelete = require('./item.delete');

const app = express();
const db = new Datastore({
  timestampData: true
});

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);
app.use(express.json());

app.get('/list/:type?', itemListGet.bind(null, db));
app.post('/list/item', itemPost.bind(null, db));
app.put('/list/:item', itemPut.bind(null, db));
app.delete('/list/:item', itemDelete.bind(null, db));

if (process.env.NODE_ENV !== 'test') {
  app.listen(4000, () => console.log(`server Listening on port ${4000}`));
} else {
  app.listen(4001, () => console.log(`server Listening on port ${4001}`));
}

module.exports = app;
