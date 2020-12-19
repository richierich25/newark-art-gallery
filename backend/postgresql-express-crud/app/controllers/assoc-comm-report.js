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
    ' FROM sale' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(assocName) LIKE \'%' + q + '%\')' +
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
    ' t1.assocName' +
    ',t1.assocEmpId' +
    ',sum(t1.assocComm) as "total"' +
    ' FROM sale t1';
    if (q != undefined) {
      sql = sql +
        ' AND (' +
        '(UPPER(assocName) LIKE \'%' + q + '%\')' +
        ')';
    }
    sql = sql + ' group by assocName, assocEmpId';
    sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;
    console.log(sql);
  db.any(sql)
    .then(records => {
      let results = [];
      records.map((row, index, record) => {
        results.push(
          {
            "assocName": record[index].assocname,
            "assocEmpId": record[index].assocempid,
            "total": record[index].total,
          });
      })
      res.status(200)
        .json(results);
    })
    .catch(function (err) {
      return next(err);
    });
}



module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
};
