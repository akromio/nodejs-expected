"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const expected = _core.dogma.use(require("@akromio/expected"));
suite(__filename, () => {
  {
    suite("toInclude()", () => {
      {
        test("when file includes content, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.toInclude("toInclude");
            expected(out).sameAs(w);
          }
        });
        test("when file doesn't include, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__dirname, "toExist.js").toInclude("xyz");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should include");
          }
        });
      }
    });
    suite("notToInclude()", () => {
      {
        test("when file doesn't include content, wrapper must be returned", () => {
          {
            const w = expected.file(__dirname, "toBeEmpty.js");
            const out = w.notToInclude("zyx");
            expected(out).sameAs(w);
          }
        });
        test("when file includes content, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).notToInclude("zyx");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not include");
          }
        });
      }
    });
  }
});