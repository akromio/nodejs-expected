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
        test("when map, wrapper must be returned", () => {
          {
            const w = expected({});
            const out = w.toBeMap();
            assert.strictEqual(w, out);
          }
        });
        test("when not map, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("xyz").toBeMap();
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
        test("when not map, wrapper must be returned", () => {
          {
            const w = expected("{}");
            const out = w.notToBeMap();
            assert.strictEqual(w, out);
          }
        });
        test("when map, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({}).notToBeMap();
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