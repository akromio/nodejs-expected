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
    suite("equalTo()", () => {
      {
        test("when equal, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.equalTo(1);
            assert.strictEqual(w, out);
          }
        });
        test("when not equal, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1).equalTo("1");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be equal to");
          }
        });
      }
    });
    suite("notToEqual()", () => {
      {
        test("when not equal, wrapper must be returned", () => {
          {
            const w = expected(1);
            const out = w.notEqualTo("1");
            assert.strictEqual(w, out);
          }
        });
        test("when equal, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(1).notEqualTo(1);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "value should not be equal to");
          }
        });
      }
    });
  }
});