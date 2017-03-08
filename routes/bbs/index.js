/**
 * Created by garysr on 2017/3/1.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('bbs/index');
});

module.exports = router;