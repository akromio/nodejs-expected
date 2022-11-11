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
    suite("toBe()", () => {
      {
        test("when value is instance of a given type, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.toBe(_core.text);
            assert.strictEqual(w, out);
          }
        });
        test("when value is not instance of the given type, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1234).toBe(_core.text);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be instance of");
            assert.include(_core.dogma.getItem(out, 1).message, "text");
          }
        });
      }
    });
    suite("notToBe()", () => {
      {
        test("when value is not instance of its type, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.notToBe(_core.num);
            assert.strictEqual(w, out);
          }
        });
        test("when value is instance of its type, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(123).notToBe(_core.num);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be instance of");
            assert.include(_core.dogma.getItem(out, 1).message, "num");
          }
        });
      }
    });
  }
});