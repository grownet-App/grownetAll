"use strict";

// backend/index.js
require("dotenv").config();

require("./db");

var express = require('express');

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var cors = require('cors');

var app = express();
var port = 5000;
app.use(express.json());
app.use(cors());
var _process$env = process.env,
    DB_HOST = _process$env.DB_HOST,
    DB_APP = _process$env.DB_APP;
var MONGODB_URL = "mongodb://".concat(DB_HOST, "/").concat(DB_APP);
console.log(MONGODB_URL); // Conexión a la base de datos MongoDB

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', function () {
  console.log('Conexión a la base de datos establecida correctamente');
});
mongoose.connection.on('error', function (err) {
  console.error('Error al conectar a la base de datos:', err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Desconectado de la base de datos');
});
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  role: {
    type: String,
    unique: false
  },
  password: String
});
var User = mongoose.model('User', userSchema); // Ruta de registro de usuario

app.post('/register', function _callee(req, res) {
  var _req$body, email, role, password, hashedPassword, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, role = _req$body.role, password = _req$body.password;
          _context.next = 4;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 4:
          hashedPassword = _context.sent;
          user = new User({
            email: email,
            role: role,
            password: hashedPassword
          });
          _context.next = 8;
          return regeneratorRuntime.awrap(user.save());

        case 8:
          res.status(200).json({
            message: 'Usuario registrado exitosamente'
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: 'Ocurrió un error al registrar el usuario'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // Ruta de inicio de sesión

app.post('/login', function _callee2(req, res) {
  var _req$body2, email, password, user, isPasswordCorrect, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          throw new Error('Usuario no encontrado');

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isPasswordCorrect = _context2.sent;

          if (isPasswordCorrect) {
            _context2.next = 12;
            break;
          }

          throw new Error('Contraseña incorrecta');

        case 12:
          token = jwt.sign({
            userId: user._id
          }, 'secreto', {
            expiresIn: '1h'
          });
          res.status(200).json({
            token: token
          });
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          res.status(401).json({
            error: _context2.t0.message
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
}); // Iniciar el servidor

app.listen(port, function () {
  console.log("Servidor backend en funcionamiento en http://localhost:".concat(port));
});
/* ________________________________________________________________________________ */

/* app.listen(app.get('port'), () =>{
    console.log("puerto", app.get('port'));
}) */