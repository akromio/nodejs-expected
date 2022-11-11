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
    suite("between()", () => {
      {
        test("when values are between, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 0,
              'y': 1,
              'z': 2
            }).members("x", "y");
            const out = w.between(0, 2);
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not between, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 2,
                'y': 1,
                'z': 0
              }).members("x", "y").between(2, 3);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be between");
          }
        });
      }
    });
    suite("notBetween()", () => {
      {
        test("when values not between, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 1,
              'y': 2,
              'z': 3
            }).members("x", "y");
            const out = w.notBetween(3, 5);
            assert.strictEqual(w, out);
          }
        });
        test("when some value between, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 1,
                'y': 2,
                'z': 3
              }).members("x", "y").notBetween(0, 2);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be between");
          }
        });
      }
    });
  }
});