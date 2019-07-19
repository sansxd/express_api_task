"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var rutas = (0, _express.Router)(); //conexion de database

//metodo GET
rutas.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.conexion)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.collection('tester').find({}).toArray();

          case 5:
            result = _context.sent;
            console.log(result);
            res.json(result);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); //metodo Post

rutas.post('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var db, tarea, resultado;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.conexion)();

          case 2:
            db = _context2.sent;
            tarea = {
              titulo: req.body.titulo,
              descripcion: req.body.descripcion
            }; //insertando la tarea obtenida

            _context2.next = 6;
            return db.collection('tester').insertOne(tarea);

          case 6:
            resultado = _context2.sent;
            console.log(req.body);
            res.json(resultado.ops[0]);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
rutas.get('/:id',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, db, resultado;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id; //conexion a la mongodb

            _context3.next = 4;
            return (0, _database.conexion)();

          case 4:
            db = _context3.sent;
            _context3.next = 7;
            return db.collection('tester').findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 7:
            resultado = _context3.sent;
            console.log(resultado);
            res.json(resultado);
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log('El error es: ', _context3.t0);
            res.json('error');

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()); //motodo Delte

rutas["delete"]('/:id',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, db, resultado;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id; //conexion a la mongodb

            _context4.next = 4;
            return (0, _database.conexion)();

          case 4:
            db = _context4.sent;
            _context4.next = 7;
            return db.collection('tester').deleteOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 7:
            resultado = _context4.sent;
            res.json({
              message: "Tarea ".concat(id, " Eliminada"),
              resultado: resultado
            });
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log('El error es: ', _context4.t0);
            res.json({
              message: 'Error'
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()); //motodo Delte

rutas.put('/:id',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, actualizarTarea, db, resultado;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            actualizarTarea = {
              titulo: req.body.titulo,
              descripcion: req.body.descripcion
            }; //conexion a la mongodb

            _context5.next = 5;
            return (0, _database.conexion)();

          case 5:
            db = _context5.sent;
            _context5.next = 8;
            return db.collection('tester').updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: actualizarTarea
            });

          case 8:
            resultado = _context5.sent;
            res.json({
              message: "Tarea ".concat(id, " Actualizada")
            });
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log('El error es: ', _context5.t0);
            res.json({
              message: 'Error'
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = rutas;
exports["default"] = _default;