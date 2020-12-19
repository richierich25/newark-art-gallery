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
      '(cast(saleNo as varchar) LIKE \'%' + q + '%\')' +
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
    ',t1.saleNo' +
    ',t1.cusSSN' +
    ',t1.date' +
    ',t1.assocEmpId' +
    ',t1.assocName' +
    ',t1.artistName' +
    ',t1.artworkName' +
    ',t1.sellingPrice' +
    ',t1.artistPay' +
    ',t1.galComm' +
    ',t1.assocComm' +
    ' FROM sale t1' +
    ' WHERE (t1.id >= ' + firstKey + ')';
    if (q != undefined) {
      sql = sql +
        ' AND (' +
        '(cast(saleNo as varchar) LIKE \'%' + q + '%\')' +
        ')';
    }
    sql = sql + ' ORDER BY saleNo ASC';
    sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;

  db.any(sql)
    .then(records => {
      let results = [];
      records.map((row, index, record) => {
        results.push(
          {
            "id": record[index].id,
            "saleNo": record[index].saleno,
            "cusSSN": record[index].cusssn,
            "date": record[index].date,
            "assocEmpId": record[index].assocempid,
            "assocName": record[index].assocname,
            "artistName": record[index].artistname,
            "artworkName": record[index].artworkname,
            "sellingPrice": record[index].sellingprice,
            "artistPay": record[index].artistpay,
            "galComm": record[index].galcomm,
            "assocComm": record[index].assoccomm,
            "links":
              [{
                "rel": "self",
                "href": url + '/sales/' + record[index].id
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
    ',t1.saleNo' +
    ',t1.cusSSN' +
    ',t1.date' +
    ',t1.assocEmpId' +
    ',t1.assocName' +
    ',t1.artistName' +
    ',t1.artworkName' +
    ',t1.sellingPrice' +
    ',t1.artistPay' +
    ',t1.galComm' +
    ',t1.assocComm' +
    ' FROM sale t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      res.status(200)
        .json({
          "id": record.id,
          "saleNo": record.saleno,
          "cusSSN": record.cusssn,
          "date": record.date,
          "assocEmpId": record.assocempid,
          "assocName": record.assocname,
          "artistName": record.artistname,
          "artworkName": record.artworkname,
          "sellingPrice": record.sellingprice,
          "artistPay": record.artistpay,
          "galComm": record.galcomm,
          "assocComm": record.assoccomm,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "saleNo": null,
          "cusSSN": null,
          "date": null,
          "assocEmpId": null,
          "assocName": null,
          "artistName": null,
          "artworkName": null,
          "sellingPrice": null,
          "artistPay": null,
          "galComm": null,
          "assocComm": null,
        });
    });
}

function createItem(req, res, next) {
  const item = {
    cusSSN: req.body.cusSSN,
    date: req.body.date,
    assocEmpId: req.body.assocEmpId,
    assocName: req.body.assocName,
    artistName: req.body.artistName,
    artworkName: req.body.artworkName,
    sellingPrice: req.body.sellingPrice,
    artistPay: req.body.artistPay,
    galComm: req.body.galComm,
    assocComm: req.body.assocComm,
  }
  let sql =
    'INSERT INTO sale' +
    ' (' +
    ' cusSSN' +
    ',date' +
    ',assocEmpId' +
    ',assocName' +
    ',artistName' +
    ',artworkName' +
    ',sellingPrice' +
    ',artistPay' +
    ',galComm' +
    ',assocComm' +
    ' ) VALUES' +
    ' (' +
    ' ${cusSSN}' +
    ',${date}' +
    ',${assocEmpId}' +
    ',${assocName}' +
    ',${artistName}' +
    ',${artworkName}' +
    ',${sellingPrice}' +
    ',${artistPay}' +
    ',${galComm}' +
    ',${assocComm}' +
    ' ) RETURNING' +
    ' id' +
    ',saleNo' +
    ',cusSSN' +
    ',date' +
    ',assocEmpId' +
    ',assocName' +
    ',artistName' +
    ',artworkName' +
    ',sellingPrice' +
    ',artistPay' +
    ',galComm' +
    ',assocComm';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "saleNo": data.saleno,
          "cusSSN": data.cusssn,
          "date": data.date,
          "assocEmpId": data.assocempid,
          "assocName": data.assocname,
          "artistName": data.artistname,
          "artworkName": data.artworkname,
          "sellingPrice": data.sellingprice,
          "artistPay": data.artistpay,
          "galComm": data.galcomm,
          "assocComm": data.assoccomm,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  const item = {
    id: req.params.id,
    saleNo: req.body.saleNo,
    cusSSN: req.body.cusSSN,
    date: req.body.date,
    assocEmpId: req.body.assocEmpId,
    assocName: req.body.assocName,
    artistName: req.body.artistName,
    artworkName: req.body.artworkName,
    sellingPrice: req.body.sellingPrice,
    artistPay: req.body.artistPay,
    galComm: req.body.galComm,
    assocComm: req.body.assocComm,
  }
  let sql =
    'UPDATE sale SET' +
    ' saleNo=${saleNo}' +
    ',cusSSN=${cusSSN}' +
    ',date=${date}' +
    ',assocEmpId=${assocEmpId}' +
    ',assocName=${assocName}' +
    ',artistName=${artistName}' +
    ',artworkName=${artworkName}' +
    ',sellingPrice=${sellingPrice}' +
    ',artistPay=${artistPay}' +
    ',galComm=${galComm}' +
    ',assocComm=${assocComm}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',saleNo' +
    ',cusSSN' +
    ',date' +
    ',assocEmpId' +
    ',assocName' +
    ',artistName' +
    ',artworkName' +
    ',sellingPrice' +
    ',artistPay' +
    ',galComm' +
    ',assocComm';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "saleNo": data.saleno,
          "cusSSN": data.cusssn,
          "date": data.date,
          "assocEmpId": data.assocempid,
          "assocName": data.assocname,
          "artistName": data.artistname,
          "artworkName": data.artworkname,
          "sellingPrice": data.sellingprice,
          "artistPay": data.artistpay,
          "galComm": data.galcomm,
          "assocComm": data.assoccomm,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  const id = parseInt(req.params.id);
  db.result('DELETE FROM sale WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} sale`
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
