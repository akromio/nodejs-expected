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
        test("when values are timestamps, wrapper must be returned", () => {
          {
            const w = expected({
              'x': (0, _core.timestamp)(),
              'y': (0, _core.timestamp)(),
              'z': (0, _core.timestamp)()
            }).members("x", "y");
            const out = w.toBeTimestamp();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not timestamp, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': (0, _core.timestamp)(),
                'y': 1
              }).members("x", "y").toBeTimestamp();
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
        test("when values are not timestamps, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "",
              'y': "",
              'z': ""
            }).members("x", "y");
            const out = w.notToBeTimestamp();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is a timestamp, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "",
                'y': (0, _core.timestamp)()
              }).members("x", "y").notToBeTimestamp();
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