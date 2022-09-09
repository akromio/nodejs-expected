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
    suite("toBeEmpty()", () => {
      {
        test("when empty, wrapper must be returned", () => {
          {
            const w = expected([]);
            const out = w.toBeEmpty();
            assert.strictEqual(w, out);
          }
        });
        test("when not empty, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("xyz").toBeEmpty();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be empty.");
          }
        });
      }
    });
    suite("notToBeEmpty()", () => {
      {
        test("when not empty, wrapper must be returned", () => {
          {
            const w = expected([1]);
            const out = w.notToBeEmpty();
            assert.strictEqual(w, out);
          }
        });
        test("when empty, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("").notToBeEmpty();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be empty.");
          }
        });
      }
    });
  }
});