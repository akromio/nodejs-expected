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
    suite("toEndWith()", () => {
      {
        test("when ended with, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.toEndWith("mondo!");
            assert.strictEqual(w, out);
          }
        });
        test("when not ended with, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").toEndWith("MONDO!");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should end with");
          }
        });
      }
    });
    suite("notToEndWith()", () => {
      {
        test("when not ended with, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.notToEndWith("MONDO!");
            assert.strictEqual(w, out);
          }
        });
        test("when ended with, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").notToEndWith("mondo!");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not end with");
          }
        });
      }
    });
  }
});