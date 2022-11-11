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
    suite("toHaveLen()", () => {
      {
        test("when length equal to passed size, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 1,
              'y': 2
            });
            const out = w.toHaveLen(2);
            assert.strictEqual(w, out);
          }
        });
        test("when not length, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                ["x"]: 1,
                ["y"]: 2
              }).toHaveLen(1);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have length to");
          }
        });
      }
    });
    suite("notToHaveLen()", () => {
      {
        test("when not length, wrapper must be returned", () => {
          {
            const w = expected({
              ["x"]: 1,
              ["y"]: 2
            });
            const out = w.notToHaveLength(1);
            assert.strictEqual(w, out);
          }
        });
        test("when length, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                ["x"]: 1,
                ["y"]: 2
              }).notToHaveLength(2);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not have length to");
          }
        });
      }
    });
  }
});