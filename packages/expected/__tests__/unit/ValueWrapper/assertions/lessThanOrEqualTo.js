"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const {
  assert
} = _core.dogma.use(require("chai"));
const expected = _core.dogma.use(require("../../../.."));
suite(__filename, () => {
  {
    suite("lessThanOrEqualTo()", () => {
      {
        test("when less than, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.lessThanOrEqualTo(2);
            assert.strictEqual(w, out);
          }
        });
        test("when equal, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.lessThanOrEqualTo(1);
            assert.strictEqual(w, out);
          }
        });
        test("when greater than, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1).lessThanOrEqualTo(0);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be less than or equal to");
          }
        });
      }
    });
  }
});