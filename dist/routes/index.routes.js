"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var rutas = (0, _express.Router)();
rutas.get('/', function (req, res) {
  res.send('bienvenido a la Api del autismo');
});
var _default = rutas;
exports["default"] = _default;