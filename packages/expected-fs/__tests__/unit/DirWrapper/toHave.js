"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const expected = _core.dogma.use(require("@akromio/expected"));
suite(__filename, () => {
  {
    suite("toHave()", () => {
      {
        test("when dir has an entry, wrapper must be returned", () => {
          {
            const w = expected.dir(__dirname);
            const out = w.toHave("toHave.js");
            expected(out).sameAs(w);
          }
        });
        test("when dir doesn't have an entry, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.dir(__dirname).toHave("unknown");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should have entry");
          }
        });
      }
    });
    suite("notToHave()", () => {
      {
        test("when dir doesn't have entry, wrapper must be returned", () => {
          {
            const w = expected.dir(__dirname);
            const out = w.notToHave("unknown");
            expected(out).sameAs(w);
          }
        });
        test("when dir has entry, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.dir(__dirname).notToHave("toHave.js");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not have entry");
          }
        });
      }
    });
  }
});