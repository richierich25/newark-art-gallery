const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/assoc-comm-report');

router.get('/count', function (req, res, next) { ctrl.getItemsCount(req, res, next); })
router.get('/', function (req, res, next) { ctrl.getItems(req, res, next, false); });

module.exports = router;

