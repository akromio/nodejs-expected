"use strict";

var _core = require("@dogmalang/core");

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("@akromio/expected"));

const path = _core.dogma.use(require("path"));

suite(__filename, () => {
  {
    suite("equalToFile()", () => {
      {
        test("when file is equal to another, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.equalToFile(__filename);
            expected(out).sameAs(w);
          }
        });
        test("when file isn't equal to another, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).equalToFile(path.join(__dirname, "./equalTo.js"));
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should be same as file");
          }
        });
      }
    });
    suite("notEqualToFile()", () => {
      {
        test("when file isn't equal to another, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.notEqualToFile(path.join(__dirname, "equalTo.js"));
            expected(out).sameAs(w);
          }
        });
        test("when file is equal to another, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).notEqualToFile(__filename);
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not be same as file");
          }
        });
      }
    });
  }
});