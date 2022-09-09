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
    suite("toBeTimestamp()", () => {
      {
        test("when timestamp, wrapper must be returned", () => {
          {
            const w = expected((0, _core.timestamp)());
            const out = w.toBeTimestamp();
            assert.strictEqual(w, out);
          }
        });
        test("when not timestamp, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected(123).toBeTimestamp();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be date.");
          }
        });
      }
    });
    suite("notToBeTimestamp()", () => {
      {
        test("when not timestamp, wrapper must be returned", () => {
          {
            const w = expected("");
            const out = w.notToBeTimestamp();
            assert.strictEqual(w, out);
          }
        });
        test("when timestamp, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected((0, _core.timestamp)()).notToBeTimestamp();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be date.");
          }
        });
      }
    });
  }
});