"use strict";

var _core = require("@dogmalang/core");
const {
  assert
} = _core.dogma.use(require("chai"));
const expected = _core.dogma.use(require("../../.."));
suite(__filename, () => {
  {
    test("when item found, value wrapper with original value must be returned", () => {
      {
        const value = {
          ["a"]: [11, 22, 33]
        };
        const w = expected(value).get("a[1]");
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, 22);
        assert.strictEqual(w.equalTo(22), w);
      }
    });
    test("when item not found, nil wrapper with original value must be returned", () => {
      {
        const value = {};
        const w = expected(value).get("a");
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, null);
        assert.strictEqual(w.toBeNil(), w);
      }
    });
    test("when chaining, original value must be used to return wrapper", () => {
      {
        const value = {
          ["a"]: 12,
          ["b"]: 34
        };
        const w = expected(value).get("a").get("b");
        assert.strictEqual(w.originalValue, value);
        assert.equal(w.value, 34);
        assert.strictEqual(w.equalTo(34), w);
      }
    });
  }
});