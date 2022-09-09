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
    suite("toBeSet()", () => {
      {
        test("when set, wrapper must be returned", () => {
          {
            const w = expected((0, _core.set)());
            const out = w.toBeSet();
            assert.strictEqual(w, out);
          }
        });
        test("when not set, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("").toBeSet();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a set");
          }
        });
      }
    });
    suite("notToBeSet()", () => {
      {
        test("when not set, wrapper must be returned", () => {
          {
            const w = expected("set()");
            const out = w.notToBeSet();
            assert.strictEqual(w, out);
          }
        });
        test("when set, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected((0, _core.set)()).notToBeSet();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a set");
          }
        });
      }
    });
  }
});