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
        test("when values are lists, wrapper must be returned", () => {
          {
            const w = expected({
              'x': [],
              'y': [],
              'z': []
            }).members("x", "y");
            const out = w.toBeList();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not list, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': [],
                'y': "",
                'z': []
              }).members("x", "y").toBeList();
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
        test("when values are not lists, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.notToBeList();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is list, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': [],
                'z': ""
              }).members("x", "y").notToBeList();
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