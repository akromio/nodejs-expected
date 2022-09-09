"use strict";

var _core = require("@dogmalang/core");

const expected = _core.dogma.use(require("@akromio/expected"));

suite(__filename, () => {
  {
    test("when file is JSON, wrapper must be returned", () => {
      {
        const w = expected.file(__dirname, "../../../package.json");
        expected(w.toBeJson()).sameAs(w);
      }
    });
    test("when file isn't JSON, assertion error must be raised", () => {
      {
        expected(() => {
          {
            expected.file(__filename).toBeJson();
          }
        }).toRaise();
      }
    });
  }
});