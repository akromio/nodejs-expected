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
    suite("toBeSet()", () => {
      {
        test("when values are set, wrapper must be returned", () => {
          {
            const w = expected({
              'x': (0, _core.set)(),
              'y': (0, _core.set)(),
              'z': (0, _core.set)()
            }).members("x", "y");
            const out = w.toBeSet();
            assert.strictEqual(w, out);
          }
        });
        test("when some vlaue is not set, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': (0, _core.set)(),
                'y': "",
                'z': (0, _core.set)()
              }).members("x", "y").toBeSet();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a set");
          }
        });
      }
    });
    suite("notToBeSet()", () => {
      {
        test("when values are not set, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.notToBeSet();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is set, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': (0, _core.set)(),
                'z': ""
              }).members("x", "y").notToBeSet();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a set");
          }
        });
      }
    });
  }
});