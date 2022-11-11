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
    suite("greaterThanOrEqualTo()", () => {
      {
        test("when values are greater than or equal to, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 1,
              'y': 2,
              'z': 3
            }).members("x", "y");
            const out = w.greaterThanOrEqualTo(0);
            assert.strictEqual(w, out);
          }
        });
        test("when some value is less than, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 2,
                'y': 1,
                'z': 0
              }).members("x", "y").greaterThanOrEqualTo(2);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be greater than or equal to");
          }
        });
      }
    });
  }
});