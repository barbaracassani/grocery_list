const itemDelete = async (db, req, res) => {
  const { item } = req.params;
  return new Promise(function (resolve, reject) {
    return db.remove({ _id: item }, {}, function (err, numRemoved) {
      return resolve(res.status(204).send(String(numRemoved)));
    });
  });
};
module.exports = itemDelete;
