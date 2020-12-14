const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
const url = config.url;
const firstKey = config.firstKey;
const limitMax = config.limitMax;
const limitDefault = config.limitDefault;
const webSite = config.webSite;
const queryMax = config.queryMax;
const offsetMax = config.offsetMax;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase(); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM collector' +
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
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }

  let limit = parseInt(req.query['limit']);
  let offset = parseInt(req.query['offset']);

  if (isNaN(limit)) { limit = limitDefault; }
  if (isNaN(offset)) { offset = 0; }
  if (limit > limitMax) { limit = limitMax; }
  if (offset > offsetMax) { offset = 0; }

  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.ssn' +
    ',t1.name' +
    ',t1.phone' +
    ',t1.email' +
    ',t1.address' +
    ' FROM collector t1' +
    ' WHERE (t1.id >= ' + firstKey + ')';
    if (q != undefined) {
      sql = sql +
        'AND (' +
        '(UPPER(name) LIKE \'%' + q + '%\')' +
        ')';
    }
    sql = sql + ' ORDER BY name ASC';
    sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;

  db.any(sql)
    .then(records => {
      let results = [];
      records.map((row, index, record) => {
        results.push(
          {
            "id": record[index].id,
            "ssn": record[index].ssn,
            "name": record[index].name,
            "phone": record[index].phone,
            "email": record[index].email,
            "address": record[index].address,
            "links":
              [{
                "rel": "self",
                "href": url + '/collectors/' + record[index].id
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
    ',t1.ssn' +
    ',t1.name' +
    ',t1.phone' +
    ',t1.email' +
    ',t1.address' +
    ' FROM collector t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      res.status(200)
        .json({
          "id": record.id,
          "ssn": record.ssn,
          "name": record.name,
          "phone": record.phone,
          "email": record.email,
          "address": record.address,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "ssn": null,
          "name": null,
          "phone": null,
          "email": null,
          "address": null,
        });
    });
}

function createItem(req, res, next) {
  const item = {
    ssn: req.body.ssn,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  }
  let sql =
    'INSERT INTO collector' +
    ' (' +
    ' ssn' +
    ',name' +
    ',phone' +
    ',email' +
    ',address' +
    ' ) VALUES' +
    ' (' +
    ' ${ssn}' +
    ',${name}' +
    ',${phone}' +
    ',${email}' +
    ',${address}' +
    ' ) RETURNING' +
    ' id' +
    ',ssn' +
    ',name' +
    ',phone' +
    ',email' +
    ',address';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "ssn": data.ssn,
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
    ssn: req.body.ssn,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  }
  let sql =
    'UPDATE collector SET' +
    ' ssn=${ssn}' +
    ',name=${name}' +
    ',phone=${phone}' +
    ',email=${email}' +
    ',address=${address}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',ssn' +
    ',name' +
    ',phone' +
    ',email' +
    ',address';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "ssn": data.ssn,
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
  db.result('DELETE FROM collector WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} collector`
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
