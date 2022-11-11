"use strict";

var _core = require("@dogmalang/core");
const {
  assert
} = _core.dogma.use(require("chai"));
const expected = _core.dogma.use(require("../../.."));
module.exports = exports = suite(__filename, () => {
  {
    suite("len", () => {
      {
        test("when called, value wrapper with len must be returned", () => {
          {
            const value = "hello";
            const w = expected(value).len();
            assert.strictEqual(w.value, (0, _core.len)(value));
          }
        });
      }
    });
  }
});