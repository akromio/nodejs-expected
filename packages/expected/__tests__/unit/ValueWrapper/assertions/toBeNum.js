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
    suite("toBeNum()", () => {
      {
        test("when num, wrapper must be returned", () => {
          {
            const w = expected(0);
            const out = w.toBeNum();
            assert.strictEqual(out, w);
          }
        });
        test("when not num, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("0").toBeNum();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a number.");
          }
        });
      }
    });
    suite("notToBeNum()", () => {
      {
        test("when not num, wrapper must be returned", () => {
          {
            const w = expected("0");
            const out = w.notToBeNum();
            assert.strictEqual(out, w);
          }
        });
        test("when num, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(0).notToBeNum();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a number");
          }
        });
      }
    });
  }
});