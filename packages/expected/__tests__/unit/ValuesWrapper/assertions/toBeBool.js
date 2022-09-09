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
    suite("toBeBool()", () => {
      {
        test("when values are bool, wrapper must be returned", () => {
          {
            const w = expected({
              'x': true,
              'y': false,
              'z': true
            }).members("x", "y");
            const out = w.toBeBool();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not bool, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': true,
                'y': "false",
                'z': true
              }).members("x", "y").toBeBool();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be boolean");
          }
        });
      }
    });
    suite("notToBeBool()", () => {
      {
        test("when values are not bool, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "true",
              'y': "false",
              'z': "true"
            }).members("x", "y");
            const out = w.notToBeBool();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is bool, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "true",
                'y': false,
                'z': "true"
              }).members("x", "y").notToBeBool();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be bool");
          }
        });
      }
    });
  }
});