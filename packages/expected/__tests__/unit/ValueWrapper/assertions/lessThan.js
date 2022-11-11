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
    suite("lessThan()", () => {
      {
        test("when less than, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.lessThan(2);
            assert.strictEqual(w, out);
          }
        });
        test("when not less than, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1).lessThan(1);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be less than");
          }
        });
      }
    });
  }
});