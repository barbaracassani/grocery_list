const itemPost = async (db, req, res) => {
  const item = req.body;
  return new Promise(function(resolve, reject) {
    return db.insert(item, function (err, newDoc) {
      return resolve(res.status(201).send(newDoc))
    });
  });
}
module.exports = itemPost
