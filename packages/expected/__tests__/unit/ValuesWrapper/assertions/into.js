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
    suite("into", () => {
      {
        test("when values in, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "one",
              'y': "two",
              'z': "three"
            }).members("x", "y");
            const out = w.into(["one", "two", "three"]);
            assert.strictEqual(w, out);
          }
        });
        test("when some value not in, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 0,
                'y': 1,
                'z': 2
              }).members("x", "y").into([1, 2, 3]);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be in");
          }
        });
      }
    });
    suite("notInto()", () => {
      {
        test("when values not in, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 1,
              'y': 2,
              'z': 3
            }).members("x", "y");
            const out = w.notInto(["one", "two", "three"]);
            assert.strictEqual(w, out);
          }
        });
        test("when some value in, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 1,
                'y': 2,
                'z': 3
              }).members("x", "y").notInto([0, 1, 2]);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be in");
          }
        });
      }
    });
  }
});