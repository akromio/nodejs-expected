"use strict";

var _core = require("@dogmalang/core");

const path = _core.dogma.use(require("path"));

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("@akromio/expected"));

const filePath = path.join(__dirname, "../../data/toEndWith.txt");
suite(__filename, () => {
  {
    suite("toEndWith()", () => {
      {
        test("when file ends with given suffix, wrapper must be returned", () => {
          {
            const w = expected.file(filePath);
            const out = w.toEndWith("acordarme");
            expected(out).sameAs(w);
          }
        });
        test("when file doesn't end with given suffix, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(filePath).toEndWith("xyz");
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
            const w = expected.file(filePath);
            const out = w.notToEndWith("xyz");
            expected(out).sameAs(w);
          }
        });
        test("when file ends with given suffix, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(filePath).notToEndWith("acordarme");
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not end with");
          }
        });
      }
    });
  }
});