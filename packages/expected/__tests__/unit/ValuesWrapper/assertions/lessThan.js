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
        test("when values are less than, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 0,
              'y': 1,
              'z': 2
            }).members("x", "y");
            const out = w.lessThan(2);
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not less than, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 0,
                'y': 1,
                'z': 2
              }).members("x", "y").lessThan(1);
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