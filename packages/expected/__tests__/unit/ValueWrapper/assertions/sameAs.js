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
    suite("sameAs()", () => {
      {
        test("when the same, wrapper must be returned", () => {
          {
            const obj = {};
            const w = expected(obj);
            const out = w.sameAs(obj);
            assert.strictEqual(w, out);
          }
        });
        test("when not the same, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({}).sameAs({});
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be same as");
          }
        });
      }
    });
    suite("notSameAs", () => {
      {
        test("when not the same, wrapper must be returned", () => {
          {
            const w = expected({});
            const out = w.notSameAs({});
            assert.strictEqual(w, out);
          }
        });
        test("when the same, assertion error must be raised", () => {
          {
            const obj = {};
            const out = _core.dogma.peval(() => {
              return expected(obj).notSameAs(obj);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "value should not be same as");
          }
        });
      }
    });
  }
});