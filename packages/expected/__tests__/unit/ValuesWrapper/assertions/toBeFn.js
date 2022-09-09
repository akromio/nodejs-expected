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
    suite("toBeFn()", () => {
      {
        test("when values are fns, wrapper must be returned", () => {
          {
            const w = expected({
              'x': _core.dogma.nop(),
              'y': _core.dogma.nop(),
              'z': _core.dogma.nop()
            }).members("x", "y");
            const out = w.toBeFn();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not fn, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': _core.dogma.nop(),
                'y': "",
                'z': _core.dogma.nop()
              }).members("x", "y").toBeFn();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a function");
          }
        });
      }
    });
    suite("notToBeFn()", () => {
      {
        test("when values are not fns, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.notToBeFn();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is fn, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': _core.dogma.nop(),
                'z': ""
              }).members("x", "y").notToBeFn();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a function");
          }
        });
      }
    });
  }
});