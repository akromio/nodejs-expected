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
        test("when between, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.between(0, 2);
            assert.strictEqual(w, out);
          }
        });
        test("when not between, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1).between(2, 3);
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
        test("when not between, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.notBetween(2, 3);
            assert.strictEqual(w, out);
          }
        });
        test("when between, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1).notBetween(0, 2);
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