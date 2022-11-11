"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
const {
  assert
} = _core.dogma.use(require("chai"));
const expected = _core.dogma.use(require("../../../.."));
suite(__filename, () => {
  {
    suite("like()", () => {
      {
        test("when like, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.like("ao");
            assert.strictEqual(w, out);
          }
        });
        test("when not like, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").like("AO");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should be like");
          }
        });
      }
    });
    suite("notLike()", () => {
      {
        test("when not like, wrapper must be returned", () => {
          {
            const w = expected("ciao mondo!");
            const out = w.notLike("AO");
            assert.strictEqual(w, out);
          }
        });
        test("when like, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected("ciao mondo!").notLike("ao");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not be like");
          }
        });
      }
    });
  }
});