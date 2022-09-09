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
        test("when dir exists, wrapper must be returned", () => {
          {
            const w = expected.dir(__dirname);
            const out = w.toExist();
            expected(out).sameAs(w);
          }
        });
        test("when dir doesn't exist, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.dir("unknown").toExist();
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should exist");
          }
        });
      }
    });
    suite("notToExist()", () => {
      {
        test("when dir doesn't exist, wrapper must be returned", () => {
          {
            const w = expected.dir("unknown");
            const out = w.notToExist();
            expected(out).sameAs(w);
          }
        });
        test("when dir exists, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.dir(__dirname).notToExist();
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("should not exist");
          }
        });
      }
    });
  }
});