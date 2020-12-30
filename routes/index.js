const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  // console.log(req.headers);
  res.render("index", { fruta: 'lichia' });
});

module.exports = router;