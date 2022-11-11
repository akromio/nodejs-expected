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
        test("when values are UUIDs, wrapper must be returned", () => {
          {
            const w = expected({
              'x': uuid.v1(),
              'y': uuid.v4()
            }).members("x", "y");
            const out = w.toBeUuid();
            assert.strictEqual(w, out);
          }
        });
        test("when some value is not a UUID, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': uuid.v4(),
                'y': "123"
              }).members("x", "y").toBeUuid();
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