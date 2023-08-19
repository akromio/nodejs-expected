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
    suite("fulfilled()", () => {
      {
        test("when fulfilled, new ValueWrapper must be returned", async () => {
          {
            const value = _core.promise.resolve(123);
            const out = await _core.dogma.pawait(() => expected(value).fulfilled());
            assert.equal(_core.dogma.getItem(out, 0), true);
            assert.equal((0, _core.typename)(_core.dogma.getItem(out, 1)), "ValueWrapper");
            assert.equal(_core.dogma.getItem(out, 1).equalTo(123), _core.dogma.getItem(out, 1));
          }
        });
        test("when rejected, assertion error must be raised", async () => {
          {
            const value = _core.promise.reject(Error("This the error"));
            const out = await _core.dogma.pawait(() => expected(value).fulfilled());
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have been fulfilled");
          }
        });
      }
    });
  }
});