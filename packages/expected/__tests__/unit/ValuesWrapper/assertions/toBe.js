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
    suite("toBe()", () => {
      {
        test("when values are instances of a given type, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "a",
              'y': "b",
              'z': "b"
            }).members("x", "y");
            const out = w.toBe(_core.text);
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not instance of the given type, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': 0,
                'z': ""
              }).members("x", "y").toBe(_core.text);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be instance of");
            assert.include(_core.dogma.getItem(out, 1).message, "text");
          }
        });
      }
    });
    suite("notToBe()", () => {
      {
        test("when values are not instance of its type, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.notToBe(_core.num);
            assert.strictEqual(w, out);
          }
        });
        test("when some value is instance of its type, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': 0,
                'z': ""
              }).members("x", "y").notToBe(_core.num);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be instance of");
            assert.include(_core.dogma.getItem(out, 1).message, "num");
          }
        });
      }
    });
  }
});