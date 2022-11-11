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
    suite("toBeMap()", () => {
      {
        test("when values are maps, wrapper must be returned", () => {
          {
            const w = expected({
              'x': {},
              'y': {},
              'z': {}
            }).members("x", "y");
            const out = w.toBeMap();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not map, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': {},
                'y': "",
                'z': {}
              }).members("x", "y").toBeMap();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be an object or map");
          }
        });
      }
    });
    suite("notToBeMap()", () => {
      {
        test("when values are not maps, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.notToBeMap();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is map, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': {},
                'z': ""
              }).members("x", "y").notToBeMap();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be an object or map");
          }
        });
      }
    });
  }
});