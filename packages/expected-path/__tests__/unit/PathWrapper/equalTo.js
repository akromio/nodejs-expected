"use strict";

var _core = require("@dogmalang/core");

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("@akromio/expected"));

suite(__filename, () => {
  {
    suite("equalTo()", () => {
      {
        test("when two Linux paths being equal, wrapper must be returned", () => {
          {
            const p = "/one/two/three";
            const w = expected.path(p);
            const out = w.equalTo(p);
            expected(out).sameAs(w);
          }
        });
        test("when two Linux paths being not equal, error must be raised", () => {
          {
            const p1 = "/one/two/three";
            const p2 = "/three/two/one";
            const w = expected.path(p1);

            const out = _core.dogma.peval(() => {
              return w.equalTo(p2);
            });

            expected(out).it(0).equalTo(false).it(1).toBe(AssertionError).like(`path .*${p1}.* should be equal to .*${p2}.*\.`);
          }
        });
        test("when two Windows paths being equal but w/ different drive letter, wrapper must be returned", () => {
          {
            const p1 = "C:\\one\\two\\three";
            const p2 = "D:\\one\\two\\three";
            const w = expected.path(p1);
            const out = w.equalTo(p2);
            expected(out).sameAs(w);
          }
        });
        test("when Windows and Linux paths being equal, wrapper must be returned", () => {
          {
            const p1 = "C:\\one\\two\\three";
            const p2 = "/one/two/three";
            const w = expected.path(p1);
            const out = w.equalTo(p2);
            expected(out).sameAs(w);
          }
        });
      }
    });
  }
});