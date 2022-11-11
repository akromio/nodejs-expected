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
    suite("toBeNil()", () => {
      {
        test("when values are nil, wrapper must be returned", () => {
          {
            const value = {
              ["x"]: null,
              ["y"]: null,
              ["z"]: 33
            };
            const w = expected(value).members("x", "y");
            const out = w.toBeNil();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not nil, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': null,
                'y': 22,
                'z': 33
              }).members("x", "y").toBeNil();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be nil/null");
          }
        });
      }
    });
    suite("notToBeNil()", () => {
      {
        test("when values are not nil, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 11,
              'y': 22,
              'z': 33
            }).members("x", "y");
            const out = w.notToBeNil();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is nil, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 11,
                'y': null,
                'z': 33
              }).members("x", "y").notToBeNil();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be nil/null");
          }
        });
      }
    });
  }
});