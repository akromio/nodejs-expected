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
    suite("toInclude()", () => {
      {
        test("when included, wrapper must be returned", () => {
          {
            const w = expected(["one", "two", "three"]);
            const out = w.toInclude("two");
            assert.strictEqual(w, out);
          }
        });
        test("when not included, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected([0, 1, 2]).toInclude(3);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should include");
          }
        });
      }
    });
    suite("notToInclude()", () => {
      {
        test("when not included, wrapper must be returned", () => {
          {
            const w = expected(["one", "two", "three"]);
            const out = w.notToInclude(1);
            assert.strictEqual(w, out);
          }
        });
        test("when included, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected([0, 1, 2]).notToInclude(1);
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not include");
          }
        });
      }
    });
  }
});