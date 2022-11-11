"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const expected = _core.dogma.use(require("@akromio/expected"));
const fs = _core.dogma.use(require("@dogmalang/fs.sync"));
suite(__filename, () => {
  {
    suite("equalTo()", () => {
      {
        test("when equal to another, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const content = fs.read(__filename);
            const out = w.equalTo(content);
            expected(out).sameAs(w);
          }
        });
        test("when not equal to another, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).equalTo("");
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("file content should be");
          }
        });
      }
    });
    suite("notEqualTo()", () => {
      {
        test("when not equal to another, wrapper must be returned", () => {
          {
            const w = expected.file(__filename);
            const out = w.notEqualTo("content");
            expected(out).sameAs(w);
          }
        });
        test("when equal to another, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected.file(__filename).notEqualTo(fs.read(__filename));
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like("file content should not be");
          }
        });
      }
    });
  }
});