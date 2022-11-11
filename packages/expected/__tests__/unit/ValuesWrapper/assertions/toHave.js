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
    suite("toHave()", () => {
      {
        test("when only one property name passed and exists, wrapper must be returned", () => {
          {
            const w = expected([{
              ["x"]: 1
            }, {
              ["x"]: 2
            }, {
              ["x"]: 3
            }]).items(0, 1);
            const out = w.toHave("x");
            assert.strictEqual(w, out);
          }
        });
        test("when several property names passed and exist, wrapper must be returned", () => {
          {
            const w = expected([{
              ["x"]: 1,
              ["y"]: 2
            }, {
              ["x"]: "a",
              ["y"]: "b"
            }]).items(0, 1);
            const out = w.toHave(["x", "y"]);
            assert.strictEqual(w, out);
          }
        });
        test("when properties passed as map and equal, wrapper must be returned", () => {
          {
            const w = expected([{
              ["x"]: 1,
              ["y"]: 2
            }, {
              ["x"]: 2,
              ["y"]: 2
            }]).items(0, 1);
            const out = w.toHave({
              'y': 2
            });
            assert.strictEqual(w, out);
          }
        });
        test("when only one property name passed not exists in some, assertion error must be raised", () => {
          {
            const w = expected([{
              ["x"]: 1
            }, {}]).items(0, 1);
            const out = _core.dogma.peval(() => {
              return w.toHave("x");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have member");
          }
        });
        test("when property names passed and some not exists, assertion error must be raised", () => {
          {
            const w = expected([{
              ["x"]: 1
            }, {
              ["x"]: 2
            }]).items(0, 1);
            const out = _core.dogma.peval(() => {
              return w.toHave(["x", "b"]);
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have member");
          }
        });
        test("when property passed as map and different in some, assertion error must be raised", () => {
          {
            const w = expected([{
              ["x"]: 1
            }, {
              ["y"]: 2
            }]).items(0, 1);
            const out = _core.dogma.peval(() => {
              return w.toHave({
                'x': 1
              });
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should have");
          }
        });
      }
    });
    suite("notToHave", () => {
      {
        test("when property name passed and not exists in all, wrapper must be returned", () => {
          {
            const w = expected([{}, {}]).items(0, 1);
            const out = w.notToHave("x");
            assert.strictEqual(w, out);
          }
        });
        test("when property names passed and not exist in all, wrapper must be returned", () => {
          {
            const w = expected([{}, {}]).items(0, 1);
            const out = w.notToHave(["x", "y"]);
            assert.strictEqual(w, out);
          }
        });
        test("when properties passed as map and not equal in all, wrapper must be returned", () => {
          {
            const w = expected([{
              ["x"]: 1,
              ["y"]: 2
            }, {}]).items(0, 1);
            const out = w.notToHave({
              'x': 2,
              'y': 1
            });
            assert.strictEqual(w, out);
          }
        });
        test("when property name passed and exists in some, error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected([{}, {
                ["x"]: 1
              }]).items(0, 1).notToHave("x");
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not have member");
          }
        });
        test("when properties passed as object and some equal, error must be raised", () => {
          {
            const out = _core.dogma.peval(() => {
              return expected([{}, {
                ["x"]: 0
              }]).items(0, 1).notToHave({
                'x': 0,
                'y': 2
              });
            });
            assert.equal(_core.dogma.getItem(out, 0), false);
            assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
            assert.include(_core.dogma.getItem(out, 1).message, "should not have");
          }
        });
      }
    });
  }
});