"use strict";

var _core = require("@dogmalang/core");

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("@akromio/expected"));

suite(__filename, () => {
  {
    suite("toEndWith()", () => {
      {
        test("when file ends with given suffix, wrapper must be returned", () => {
          {
            const w = expected.file(__dirname, "../../../package.json");
            const out = w.toEndWith("}\n");
            expected(out).sameAs(w);
          }
        });
        test("when file doesn't end with given suffix, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).toEndWith("xyz");
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should end with");
          }
        });
      }
    });
    suite("notToEndWith()", () => {
      {
        test("when file doesn't end with given suffix, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.notToEndWith("xyz");
            expected(out).sameAs(w);
          }
        });
        test("when file ends with given suffix, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__dirname, "../../../package.json").notToEndWith("}\n");
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not end with");
          }
        });
      }
    });
  }
});