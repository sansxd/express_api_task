"use strict";

var _express = _interopRequireWildcard(require("express"));

var _config = require("./config");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _tareas = _interopRequireDefault(require("./routes/tareas.routes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _database = require("./database");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

//importando el puerto desde config.js de .env
//importando rutas
//conexion a la bd
var app = (0, _express["default"])(); //haciendo andar la conexion

(0, _database.conexion)(); //SETTINGS

app.set('port', _config.port); //MIDDLEWARES

app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])()); //usando rutas

app.use(_index["default"]);
app.use('/tareas', _tareas["default"]);
module.exports = app;