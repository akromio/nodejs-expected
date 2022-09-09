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
    suite("toBeText()", () => {
      {
        test("when text, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo1");
            const out = w.toBeText();
            assert.strictEqual(w, out);
          }
        });
        test("when not text, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1234).toBeText();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be text/string");
          }
        });
      }
    });
    suite("notToBeText()", () => {
      {
        test("when text, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").notToBeText();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be text/string");
          }
        });
        test("when not text, wrapper must be returned", () => {
          {
            const w = expected(123);
            const out = w.notToBeText();
            assert.strictEqual(w, out);
          }
        });
      }
    });
  }
});