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
    suite("toStartWith()", () => {
      {
        test("when started with, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.toStartWith("ciao");
            assert.strictEqual(w, out);
          }
        });
        test("when not started with, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").toStartWith("CIAO");
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should start with");
          }
        });
      }
    });
    suite("notToStartWith()", () => {
      {
        test("when not started with, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.notToStartWith("CIAO");
            assert.strictEqual(w, out);
          }
        });
        test("when started with, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").notToStartWith("ciao");
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not start with");
          }
        });
      }
    });
  }
});