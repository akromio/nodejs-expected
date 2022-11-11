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
    suite("toBeList()", () => {
      {
        test("when list, wrapper must be returned", () => {
          {
            const w = expected([]);
            const out = w.toBeList();
            assert.strictEqual(w, out);
          }
        });
        test("when not list, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("second").toBeList();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be an array or list");
          }
        });
      }
    });
    suite("notToBeList()", () => {
      {
        test("when not list, wrapper must be returned", () => {
          {
            const w = expected("[]");
            const out = w.notToBeList();
            assert.strictEqual(w, out);
          }
        });
        test("when list, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected([]).notToBeList();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be an array or list");
          }
        });
      }
    });
  }
});