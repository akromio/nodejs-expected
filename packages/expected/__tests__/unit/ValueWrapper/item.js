"use strict";

var _core = require("@dogmalang/core");
const {
  assert
} = _core.dogma.use(require("chai"));
const expected = _core.dogma.use(require("../../.."));
module.exports = exports = suite(__filename, () => {
  {
    suite("item()", () => {
      {
        test("when item found, item wrapper with original value must be returned", () => {
          {
            const value = [11, 22, 33];
            const w = expected(value).it(1);
            assert.strictEqual(w.originalValue, value);
            assert.equal(w.value, 22);
            assert.strictEqual(w.equalTo(22), w);
          }
        });
        test("when item not found, nil wrapper with original value must be returned", () => {
          {
            const value = [11, 22, 33];
            const w = expected(value).it(10);
            assert.strictEqual(w.originalValue, value);
            assert.equal(w.value, null);
            assert.strictEqual(w.toBeNil(), w);
          }
        });
      }
    });
    suite("items()", () => {
      {
        test("when indexes passed, ValuesWrapper w/ selected items must be returned", () => {
          {
            const value = [11, 22, 33];
            const w = expected(value).items(0, 2);
            assert.strictEqual(w.originalValue, value);
            assert.deepEqual(w.values, [_core.dogma.getItem(value, 0), _core.dogma.getItem(value, 2)]);
          }
        });
        test("when no index passed, ValuesWrapper must be returned", () => {
          {
            const value = [11, 22, 33];
            const w = expected(value).items();
            assert.strictEqual(w.originalValue, value);
            assert.strictEqual(w.values, value);
          }
        });
        test("when originalValue is not nil, this must be used as root", () => {
          {
            const value = [11, 22, 33];
            const w = expected(value).it(0).items();
            assert.strictEqual(w.originalValue, value);
            assert.strictEqual(w.values, value);
          }
        });
      }
    });
  }
});