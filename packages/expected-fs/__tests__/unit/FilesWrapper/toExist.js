"use strict";

var _core = require("@dogmalang/core");

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("@akromio/expected"));

suite(__filename, () => {
  {
    suite("toExist()", () => {
      {
        test("when files exist, wrapper must be returned", () => {
          {
            const w = expected.files(__filename, __filename);
            const out = w.toExist();
            expected(out).sameAs(w);
          }
        });
        test("when some file doesn't exist, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.files(__filename, "unknown").toExist();
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should exist");
          }
        });
      }
    });
    suite("notToExist()", () => {
      {
        test("when files don't exist, wrapper must be returned", () => {
          {
            const w = expected.files("unknown1", "unknown2");
            const out = w.notToExist();
            expected(out).sameAs(w);
          }
        });
        test("when some file exists, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.files("unknown", __filename).notToExist();
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not exist");
          }
        });
      }
    });
  }
});