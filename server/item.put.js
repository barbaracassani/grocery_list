const itemPut = async (db, req, res) => {
  return new Promise(function (resolve, reject) {
    db.update(
      { _id: req.params.item },
      { $set: { bought: req.body.bought } },
      { multi: false },
      function (err, numReplaced) {
        return resolve(res.status(204).send(String(numReplaced)));
      }
    );
  });
};
module.exports = itemPut;
