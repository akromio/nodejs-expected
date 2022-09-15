"use strict";

var _core = require("@dogmalang/core");

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const {
  assert
} = _core.dogma.use(require("chai"));

const {
  Duplex
} = _core.dogma.use(require("stream"));

const expected = _core.dogma.use(require("../../../.."));

suite(__filename, () => {
  {
    suite("toBeDuplexStream()", () => {
      {
        test("when duplex stream, wrapper must be returned", () => {
          {
            const w = expected(new Duplex());
            const out = w.toBeDuplexStream();
            assert.strictEqual(out, w);
          }
        });
        test("when not duplex stream, error must be returned", () => {
          {
            const w = expected("");

            const out = _core.dogma.peval(() => {
              return w.toBeDuplexStream();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a duplex stream");
          }
        });
      }
    });
    suite("notToBeDuplexStream()", () => {
      {
        test("when not duplex stream, wrapper must be returned", () => {
          {
            const w = expected("");
            const out = w.notToBeDuplexStream();
            assert.strictEqual(out, w);
          }
        });
        test("when duplex stream, error must be returned", () => {
          {
            const w = expected(new Duplex());

            const out = _core.dogma.peval(() => {
              return w.notToBeDuplexStream();
            });

            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a duplex stream");
          }
        });
      }
    });
  }
});