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
    suite("toBePromise()", () => {
      {
        test("when promise, wrapper must be returned", () => {
          {
            const w = expected(_core.promise.resolve());
            const out = w.toBePromise();
            assert.strictEqual(out, w);
          }
        });
        test("when not promise, assertion error must be raised", () => {
          {
            const w = expected(123);
            const out = _core.dogma.peval(() => {
              return w.toBePromise();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a promise");
          }
        });
      }
    });
    suite("notToBePromise()", () => {
      {
        test("when not promise, wrapper must be returned", () => {
          {
            const w = expected(123);
            const out = w.notToBePromise();
            assert.strictEqual(out, w);
          }
        });
        test("when promise, assertion error must be raised", () => {
          {
            const w = expected(_core.promise.resolve());
            const out = _core.dogma.peval(() => {
              return w.notToBePromise();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a promise");
          }
        });
      }
    });
  }
});