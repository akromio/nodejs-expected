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
    suite("toBeCallable()", () => {
      {
        test("when callable, wrapper must be returned", () => {
          {
            const w = expected(_core.dogma.nop());
            const out = w.toBeCallable();
            assert.strictEqual(w, out);
          }
        });
        test("when not callable, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("").toBeCallable();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be callable");
          }
        });
      }
    });
    suite("notToBeCallable()", () => {
      {
        test("when not callable, wrapper must be returned", () => {
          {
            const w = expected("nop");
            const out = w.notToBeCallable();
            assert.strictEqual(w, out);
          }
        });
        test("when callable, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(_core.dogma.nop()).notToBeCallable();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be callable");
          }
        });
      }
    });
  }
});