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
    suite("toBeText()", () => {
      {
        test("when values are text, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.toBeText();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not text, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': 0,
                'z': ""
              }).members("x", "y").toBeText();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be text/string");
          }
        });
      }
    });
    suite("notToBeText()", () => {
      {
        test("when some value is text, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': 0,
                'y': "",
                'z': 0
              }).members("x", "y").notToBeText();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be text/string");
          }
        });
        test("when values are not text, wrapper must be returned", () => {
          {
            const w = expected({
              'x': 0,
              'y': 0,
              'z': 0
            }).members("x", "y");
            const out = w.notToBeText();
            assert.strictEqual(w, out);
          }
        });
      }
    });
  }
});