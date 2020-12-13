const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
const url = config.url;
const firstKey = config.firstKey;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase(); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM artist' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (result) {
      res.status(200)
        .json({ "count": result.count });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next) {
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.phone' +
    ',t1.email' +
    ',t1.address' +
    ' FROM artist t1' +
    ' WHERE (t1.id >= ' + firstKey + ')' +
    ' ORDER BY t1.name ASC';
  db.any(sql)
    .then(records => {
      let results = [];
      records.map((row, index, record) => {
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "phone": record[index].phone,
            "email": record[index].email,
            "address": record[index].address,
            "links":
              [{
                "rel": "self",
                "href": url + '/artists/' + record[index].id
              }]
          });
      })
      res.status(200)
        .json(results);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next) {
  const id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.phone' +
    ',t1.email' +
    ',t1.address' +
    ' FROM artist t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      const phone = parseInt(record.phone);
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "phone": phone,
          "email": record.email,
          "address": record.address,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "phone": null,
          "email": null,
          "address": null,
        });
    });
}

function createItem(req, res, next) {
  const item = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  }
  let sql =
    'INSERT INTO artist' +
    ' (' +
    ' name' +
    ',phone' +
    ',email' +
    ',address' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${phone}' +
    ',${email}' +
    ',${address}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',phone' +
    ',email' +
    ',address';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "phone": data.phone,
          "email": data.email,
          "address": data.address,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  const item = {
    id: req.params.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  }
  let sql =
    'UPDATE artist SET' +
    ' name=${name}' +
    ',phone=${phone}' +
    ',email=${email}' +
    ',address=${address}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',phone' +
    ',email' +
    ',address';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "phone": data.phone,
          "email": data.email,
          "address": data.address,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  const id = parseInt(req.params.id);
  db.result('DELETE FROM artist WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} artist`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
};
