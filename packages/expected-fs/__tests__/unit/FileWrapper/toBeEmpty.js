"use strict";

var _core = require("@dogmalang/core");

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("@akromio/expected"));

suite(__filename, () => {
  {
    suite("toBeEmpty()", () => {
      {
        test("when file is empty, wrapper must be returned", () => {
          {
            const w = expected.file(__dirname, "../../data/empty.txt");
            const out = w.toBeEmpty();
            expected(out).sameAs(w);
          }
        });
        test("when file isn't empty, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).toBeEmpty();
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should be empty");
          }
        });
      }
    });
    suite("notToBeEmpty()", () => {
      {
        test("when file isnt empty, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.notToBeEmpty();
            expected(out).sameAs(w);
          }
        });
        test("when file is empty, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__dirname, "../../data/empty.txt").notToBeEmpty();
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not be empty");
          }
        });
      }
    });
  }
});