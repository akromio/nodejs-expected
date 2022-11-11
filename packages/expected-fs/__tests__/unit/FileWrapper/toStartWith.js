"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const expected = _core.dogma.use(require("@akromio/expected"));
suite(__filename, () => {
  {
    suite("toStartWith()", () => {
      {
        test("when file starts with given prefix, wrapper must be returned", () => {
          {
            const w = expected.file(__dirname, "../../../package.json");
            const out = w.toStartWith("{");
            expected(out).sameAs(w);
          }
        });
        test("when file doesn't start with given prefix, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).toStartWith("xyz");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should start with");
          }
        });
      }
    });
    suite("notToStartWith()", () => {
      {
        test("when file doesn't start with given prefix, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.notToStartWith("xyz");
            expected(out).sameAs(w);
          }
        });
        test("when file starts with given prefix, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__dirname, "../../../package.json").notToStartWith("{");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not start with");
          }
        });
      }
    });
  }
});