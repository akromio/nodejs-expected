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
    suite("toBeFn()", () => {
      {
        test("when fn, wrapper must be returned", () => {
          {
            const w = expected(_core.dogma.nop());
            const out = w.toBeFn();
            assert.strictEqual(w, out);
          }
        });
        test("when not fn, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("").toBeFn();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a function");
          }
        });
      }
    });
    suite("notToBeFn()", () => {
      {
        test("when not fn, wrapper must be returned", () => {
          {
            const w = expected("nop");
            const out = w.notToBeFn();
            assert.strictEqual(w, out);
          }
        });
        test("when fn, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(_core.dogma.nop()).notToBeFn();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a function");
          }
        });
      }
    });
  }
});