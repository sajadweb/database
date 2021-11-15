"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["select * from users"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sql = require('mssql');

var config = {
  port: 1433,
  server: "185.189.121.150",
  user: 'admMaz',
  password: '40knm#g3',
  database: "Mazzaneh",
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true
  }
};

var run = function run() {
  var pool, _ref, recordset;

  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(sql.connect(config));

        case 2:
          pool = _context.sent;
          _context.prev = 3;
          console.log("connect start ...");
          _context.next = 7;
          return regeneratorRuntime.awrap(sql.query(_templateObject()));

        case 7:
          _ref = _context.sent;
          recordset = _ref.recordset;
          console.log("recordset", {
            recordset: recordset
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);

        case 15:
          _context.prev = 15;
          _context.next = 18;
          return regeneratorRuntime.awrap(pool.close());

        case 18:
          console.log("connect close ...");
          return _context.finish(15);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 12, 15, 20]]);
};

run();