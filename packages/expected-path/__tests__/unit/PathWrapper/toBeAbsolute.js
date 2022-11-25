"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const expected = _core.dogma.use(require("@akromio/expected"));
suite(__filename, () => {
  {
    suite("toBeAbsolute()", () => {
      {
        test("when absolute, wrapper must be returned", () => {
          {
            const p = "/one/two/three";
            const w = expected.path(p);
            const out = w.toBeAbsolute();
            expected(out).sameAs(w);
          }
        });
        test("when relative, assertion error must be raised", () => {
          {
            const p = "one/two/three";
            const w = expected.path(p);
            const out = _core.dogma.peval(() => {
              return w.toBeAbsolute();
            });
            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like(`path .*${p}.* should be absolute.`);
          }
        });
      }
    });
  }
});