"use strict";

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send('bienvenido a la Api de testeo');
  console.log('pasando por autismo');
}); //buscar diferencias entre esto
// export default router;
// y esto

module.exports = router;