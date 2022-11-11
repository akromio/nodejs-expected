"use strict";

var _core = require("@dogmalang/core");
const {
  assert
} = _core.dogma.use(require("chai"));
const pEval = _core.dogma.use(require("../.."));
module.exports = exports = suite(__filename, () => {
  {
    test("when no error raised, [true, returned], must be returned", () => {
      {
        const out = pEval(() => {
          {
            return 1234;
          }
        });
        assert.deepEqual(out, [true, 1234]);
      }
    });
    test("when error raised, [false, error] must be returned", () => {
      {
        const out = pEval(() => {
          {
            _core.dogma.raise("error!");
          }
        });
        assert.deepEqual(out, [false, "error!"]);
      }
    });
  }
});