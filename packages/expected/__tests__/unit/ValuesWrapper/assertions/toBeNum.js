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
        test("when members are numeric, wrapper must be returned", () => {
          {
            const value = {
              ["x"]: 11,
              ["y"]: 22,
              ["z"]: 33
            };
            const w = expected(value).members("x", "y");
            const out = w.toBeNum();
            assert.strictEqual(w, out);
          }
        });
        test("when some member isn't numeric, error must be raised", () => {
          {
            const value = {
              ["x"]: 11,
              ["y"]: "22",
              ["z"]: "33"
            };

            const out = _core.dogma.peval(() => {
              return expected(value).members("x", "y").toBeNum();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), Error);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a number");
          }
        });
      }
    });
    suite("notToBeNum()", () => {
      {
        test("when members are not numeric, wrapper must be returned", () => {
          {
            const value = {
              ["x"]: "11",
              ["y"]: "22",
              ["z"]: "33"
            };
            const w = expected(value).members("x", "y");
            const out = w.notToBeNum();
            assert.strictEqual(w, out);
          }
        });
        test("when some member is numeric, error must be raised", () => {
          {
            const value = {
              ["x"]: 11,
              ["y"]: "22",
              ["z"]: "33"
            };

            const out = _core.dogma.peval(() => {
              return expected(value).members("x", "y").notToBeNum();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), Error);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a number");
          }
        });
      }
    });
  }
});