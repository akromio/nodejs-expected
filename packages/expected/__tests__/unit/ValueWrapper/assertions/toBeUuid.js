"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const {
  assert
} = _core.dogma.use(require("chai"));
const uuid = _core.dogma.use(require("uuid"));
const expected = _core.dogma.use(require("../../../.."));
suite(__filename, () => {
  {
    suite("toBeUuid()", () => {
      {
        test("when valid UUID, wrapper must be returned", () => {
          {
            const w = expected(uuid.v4());
            const out = w.toBeUuid();
            assert.strictEqual(w, out);
          }
        });
        test("when invalid UUID, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("123").toBeUuid();
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be a valid UUID");
          }
        });
      }
    });
  }
});