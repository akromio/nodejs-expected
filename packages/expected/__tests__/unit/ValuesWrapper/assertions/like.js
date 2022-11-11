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
        test("when values are like, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "a",
              'y': "b",
              'z': "c"
            }).members("x", "y");
            const out = w.like("[ab]");
            assert.strictEqual(w, out);
          }
        });
        test("when some value not like, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "a",
                'y': "b",
                'z': "c"
              }).members("x", "y").like("[aB]");
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
        test("when values are not like, wrapper must be returned", () => {
          {
            const w = expected({
              'x': "a",
              'y': "b",
              'z': "c"
            }).members("x", "y");
            const out = w.notLike("AO");
            assert.strictEqual(w, out);
          }
        });
        test("when some value is like, assertion error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected({
                'x': "a",
                'y': "b",
                'z': "c"
              }).members("x", "y").notLike("[Ab]");
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