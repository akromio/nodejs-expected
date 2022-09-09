"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../../.."));

module.exports = exports = suite(__filename, () => {
  {
    suite("member", () => {
      {
        test("when member found, value wrapper with original value must be returned", () => {
          {
            const value = {
              ["x"]: 11,
              ["y"]: 22,
              ["z"]: 33
            };
            const w = expected(value).member("y");
            assert.strictEqual(w.originalValue, value);
            assert.equal(w.value, 22);
            assert.strictEqual(w.equalTo(22), w);
          }
        });
        test("when member not found, nil wrapper with original value must be returned", () => {
          {
            const value = {};
            const w = expected(value).member("a");
            assert.strictEqual(w.originalValue, value);
            assert.equal(w.value, null);
            assert.strictEqual(w.toBeNil(), w);
          }
        });
      }
    });
    suite("members", () => {
      {
        test("when members found, values wrapper with original value must be returned", () => {
          {
            const value = {
              ["x"]: 11,
              ["y"]: 22,
              ["z"]: 33
            };
            const w = expected(value).members("x", "y");
            assert.equal((0, _core.typename)(w), "ValuesWrapper");
          }
        });
        test("when originalValue is not nil, this must be used as root", () => {
          {
            const value = {
              ["x"]: 11,
              ["y"]: 22,
              ["z"]: 33
            };
            const w = expected(value).member("x").members("x", "y");
            assert.equal((0, _core.typename)(w), "ValuesWrapper");
            assert.strictEqual(w.originalValue, value);
          }
        });
      }
    });
  }
});