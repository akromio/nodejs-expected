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
    suite("similarTo()", () => {
      {
        test("when value1 is similar to value2, wrapper must be returned", () => {
          {
            const value1 = "hello";
            const value2 = "hello";
            const w = expected(value1);
            const out = w.similarTo(value2);
            assert.strictEqual(out, w);
          }
        });
        test("when value1 is not similar to value2, wrapper must be returned", () => {
          {
            const value1 = "hello";
            const value2 = 123;
            const w = expected(value1);

            const out = _core.dogma.peval(() => {
              return w.similarTo(value2);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be similar");
          }
        });
        test("when arrays have different length, error must be raised", () => {
          {
            const arr1 = [];
            const arr2 = [1];

            const out = _core.dogma.peval(() => {
              return expected(arr1).similarTo(arr2);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have the same length");
          }
        });
        test("when two arrays are similar, wrapper must be returned", () => {
          {
            const arr1 = [1, 2, 3];
            const arr2 = [2, 1, 3];
            const w = expected(arr1);
            const out = w.similarTo(arr2);
            assert.strictEqual(out, w);
          }
        });
        test("when an item of array 1 not in array 2, error must be raised", () => {
          {
            const arr1 = [1, 2, 3];
            const arr2 = [2, 1, 4];
            const w = expected(arr1);

            const out = _core.dogma.peval(() => {
              return w.similarTo(arr2);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be in");
          }
        });
        test("when second appearance of item not in second array, error must be raised", () => {
          {
            const arr1 = [1, 2, 1, 3];
            const arr2 = [1, 2, 3, 4];
            const w = expected(arr1);

            const out = _core.dogma.peval(() => {
              return w.similarTo(arr2);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be in");
          }
        });
      }
    });
    suite("notSimilarTo()", () => {
      {
        test("when not similar, wrapper must be raised", () => {
          {
            const arr1 = [];
            const arr2 = [1];
            const w = expected(arr1);
            const out = w.notSimilarTo(arr2);
            assert.strictEqual(out, w);
          }
        });
        test("when similar, error must be raised", () => {
          {
            const arr1 = [1, 2, 3];
            const arr2 = [2, 1, 3];
            const w = expected(arr1);

            const out = _core.dogma.peval(() => {
              return w.notSimilarTo(arr2);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be similar");
          }
        });
      }
    });
  }
});