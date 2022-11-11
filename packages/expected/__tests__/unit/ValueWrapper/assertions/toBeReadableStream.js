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
    suite("toBeReadableStream()", () => {
      {
        test("when readable stream, wrapper must be returned", () => {
          {
            const w = expected(new Duplex());
            const out = w.toBeReadableStream();
            assert.strictEqual(out, w);
          }
        });
        test("when not readable stream, error must be returned", () => {
          {
            const w = expected("");
            const out = _core.dogma.peval(() => {
              return w.toBeReadableStream();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a readable stream");
          }
        });
      }
    });
    suite("notToBeReadableStream()", () => {
      {
        test("when not dreadableuplex stream, wrapper must be returned", () => {
          {
            const w = expected("");
            const out = w.notToBeReadableStream();
            assert.strictEqual(out, w);
          }
        });
        test("when readable stream, error must be returned", () => {
          {
            const w = expected(new Duplex());
            const out = _core.dogma.peval(() => {
              return w.notToBeReadableStream();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be a readable stream");
          }
        });
      }
    });
  }
});