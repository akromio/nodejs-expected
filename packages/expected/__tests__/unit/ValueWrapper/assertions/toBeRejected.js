"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const {
  assert
} = _core.dogma.use(require("chai"));
const expected = _core.dogma.use(require("../../../.."));
module.exports = exports = suite(__filename, () => {
  {
    test("when rejected, wrapper must be returned", async () => {
      {
        const w = (0, await expected(_core.promise.reject()));
        assert.strictEqual(w.toBeRejected(), w);
      }
    });
    test("when not rejected, assertion error must be raised", async () => {
      {
        const w = (0, await expected(_core.promise.resolve()));
        assert.throws(() => {
          {
            expected(w).toBeRejected();
          }
        }, AssertionError, "value should have been rejected.");
      }
    });
  }
});