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
    suite("toBeBool()", () => {
      {
        test("when bool, wrapper must be returned", () => {
          {
            const w = expected(true);
            const out = w.toBeBool();
            assert.strictEqual(w, out);
          }
        });
        test("when not bool, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("true").toBeBool();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be boolean");
          }
        });
      }
    });
    suite("notToBeBool()", () => {
      {
        test("when not bool, wrapper must be returned", () => {
          {
            const w = expected("true");
            const out = w.notToBeBool();
            assert.strictEqual(w, out);
          }
        });
        test("when bool, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(true).notToBeBool();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be bool");
          }
        });
      }
    });
  }
});