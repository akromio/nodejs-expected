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
    suite("toBeEmpty()", () => {
      {
        test("when values are empty, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.toBeEmpty();
            assert.strictEqual(w, out);
          }
        });
        test("when some vlaue is not empty, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': "123",
                'z': ""
              }).members("x", "y").toBeEmpty();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be empty.");
          }
        });
      }
    });
    suite("notToBeEmpty()", () => {
      {
        test("when values are not empty, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "a",
              'y': "b",
              'z': "c"
            }).members("x", "y");
            const out = w.notToBeEmpty();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is empty, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "a",
                'y': "",
                'z': "c"
              }).members("x", "y").notToBeEmpty();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be empty.");
          }
        });
      }
    });
  }
});