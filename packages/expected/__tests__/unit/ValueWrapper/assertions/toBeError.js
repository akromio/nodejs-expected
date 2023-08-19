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
    suite("toBeError()", () => {
      {
        test("when Error, wrapper must be returned", () => {
          {
            const w = expected(new Error());
            const out = w.toBeError();
            assert.strictEqual(w, out);
          }
        });
        test("when not Error, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("").toBeError();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be an error");
          }
        });
      }
    });
    suite("notToBeError()", () => {
      {
        test("when not Error, wrapper must be returned", () => {
          {
            const w = expected("");
            const out = w.notToBeError();
            assert.strictEqual(w, out);
          }
        });
        test("when Error, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(new Error()).notToBeError();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be an error");
          }
        });
      }
    });
  }
});