const listGet = (db, req, res) => {
  // const type = req.body.type;
  // todo add type if there is time, also error handling and if lots of time schema validation with joi
  return new Promise(function(resolve, reject) {
    return db.find({}, function (err, docs) {
      return resolve(res.send(docs))
    });
  });
}
module.exports = listGet
