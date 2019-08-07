const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('login');
  //console.log(req.body);
});

module.exports = router;
