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
    suite("rejected()", () => {
      {
        test("when rejected, new ValueWrapper must be returned", async () => {
          {
            const value = _core.promise.reject(new Error('this is the error'));
            const out = await _core.dogma.pawait(() => expected(value).rejected());
            assert.equal(_core.dogma.getItem(out, 0), true);
            assert.equal((0, _core.typename)(_core.dogma.getItem(out, 1)), "ValueWrapper");
            assert.equal(_core.dogma.getItem(out, 1).toBe("Error"), _core.dogma.getItem(out, 1));
          }
        });
        test("when fulfilled, assertion error must be raised", async () => {
          {
            const value = _core.promise.resolve(123);
            const out = await _core.dogma.pawait(() => expected(value).rejected());
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have been rejected");
          }
        });
      }
    });
  }
});