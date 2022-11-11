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
    suite("into", () => {
      {
        test("when in, wrapper must be returned", () => {
          {
            const w = expected("two");
            const out = w.into(["one", "two", "three"]);
            assert.strictEqual(w, out);
          }
        });
        test("when not in, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(0).into([1, 2, 3]);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be in");
          }
        });
      }
    });
    suite("notInto()", () => {
      {
        test("when not in, wrapper must be returned", () => {
          {
            const w = expected("two");
            const out = w.notInto(["one", "three"]);
            assert.strictEqual(w, out);
          }
        });
        test("when in, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(2).notInto([1, 2, 3]);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be in");
          }
        });
      }
    });
  }
});