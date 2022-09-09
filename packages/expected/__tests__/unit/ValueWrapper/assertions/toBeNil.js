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
    suite("toBeNil()", () => {
      {
        test("when value is nil, wrapper must be returned", () => {
          {
            const w = expected(null);
            const out = w.toBeNil();
            assert.strictEqual(w, out);
          }
        });
        test("when value is not nil, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(0).toBeNil();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be nil");
          }
        });
      }
    });
    suite("notToBeNil()", () => {
      {
        test("when value is not nil, wrapper must be returned", () => {
          {
            const w = expected(0);
            const out = w.notToBeNil();
            assert.strictEqual(w, out);
          }
        });
        test("when value is nil, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(null).notToBeNil();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be nil/null");
          }
        });
      }
    });
  }
});