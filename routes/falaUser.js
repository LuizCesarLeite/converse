const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  console.log(req.headers);
    res.json( { fruta: 'lichia' } );
  });

router.post('/', function(req, res, next) {
  console.log(req.body);
  axios
  .post('http://localhost:3000/api/v1/bots/features/converse/webuserMizael',
    req.body
  )
  .then((dataBot) => {
    console.log(dataBot.data.responses);
    res.json({"responses": dataBot.data.responses});
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json(error);
  })

});

module.exports = router;