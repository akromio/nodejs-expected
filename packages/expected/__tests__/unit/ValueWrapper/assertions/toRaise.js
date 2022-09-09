"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const {
  AssertionError
} = _core.dogma.use(require("assert"));

const expected = _core.dogma.use(require("../../../.."));

suite(__filename, () => {
  {
    suite("toRaise()", () => {
      {
        suite("when no error passed", () => {
          {
            test("when error raised, wrapper must be returned", () => {
              {
                const w = expected("bonjour");
                const out = w.toRaise();
                assert.strictEqual(out, w);
              }
            });
            test("when error not raised, assertion error must be raised", () => {
              {
                const out = _core.dogma.peval(() => {
                  return expected(_core.dogma.nop()).toRaise();
                });

                assert.equal(_core.dogma.getItem(out, 0), false);
                assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                assert.include(_core.dogma.getItem(out, 1).message, "error should be raised.");
              }
            });
          }
        });
        suite("when specific type passed", () => {
          {
            test("when error raised of the type, wrapper must be returned", () => {
              {
                const w = expected("bonjour");
                const out = w.toRaise(TypeError);
                assert.strictEqual(out, w);
              }
            });
            test("when error raised but not of the type, assertion error must be raised", () => {
              {
                const out = _core.dogma.peval(() => {
                  return expected("bonjour").toRaise(SyntaxError);
                });

                assert.equal(_core.dogma.getItem(out, 0), false);
                assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                assert.include(_core.dogma.getItem(out, 1).message, "SyntaxError");
                assert.include(_core.dogma.getItem(out, 1).message, "should be raised");
              }
            });
          }
        });
        suite("when specific error object passed", () => {
          {
            test("when error raised same as specific error, wrapper must be returned", () => {
              {
                const w = expected("bonjour");
                const out = w.toRaise(TypeError("value is not a function"));
                assert.strictEqual(out, w);
              }
            });
            test("when error raised but not specific error, assertion error must be raised", () => {
              {
                const out = _core.dogma.peval(() => {
                  return expected("bonjour").toRaise(Error("xyz"));
                });

                assert.equal(_core.dogma.getItem(out, 0), false);
                assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                assert.include(_core.dogma.getItem(out, 1).message, "should be raised");
              }
            });
            suite("error expected is a text", () => {
              {
                test("when error raised and real message is different, assertion error must be raised", () => {
                  {
                    const out = _core.dogma.peval(() => {
                      return expected("bonjour").toRaise("xyz");
                    });

                    assert.equal(_core.dogma.getItem(out, 0), false);
                    assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                    assert.include(_core.dogma.getItem(out, 1).message, "value is not a function");
                  }
                });
                test("when error raised and real message is the same, wrapper must be returned", () => {
                  {
                    const w = expected("bonjour");
                    const out = w.toRaise("value is not a function");
                    expected(out).sameAs(w);
                  }
                });
              }
            });
          }
        });
      }
    });
    suite("notToRaise()", () => {
      {
        suite("when no error passed", () => {
          {
            test("when no error raised, wrapper must be returned", () => {
              {
                const w = expected(_core.dogma.nop());
                const out = w.notToRaise();
                assert.strictEqual(out, w);
              }
            });
            test("when error raised, assertion error must be raised", () => {
              {
                const out = _core.dogma.peval(() => {
                  return expected("ciao!").notToRaise();
                });

                assert.equal(_core.dogma.getItem(out, 0), false);
                assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                assert.include(_core.dogma.getItem(out, 1).message, "error should not be raised");
              }
            });
          }
        });
        suite("when specific type passed", () => {
          {
            test("when error raised but not of the type, wrapper must be returned", () => {
              {
                const w = expected("bonjour");
                const out = w.notToRaise(SyntaxError);
                assert.strictEqual(out, w);
              }
            });
            test("when error raised of the type, assertion error must be raised", () => {
              {
                const out = _core.dogma.peval(() => {
                  return expected("bonjour").notToRaise(TypeError);
                });

                assert.equal(_core.dogma.getItem(out, 0), false);
                assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                assert.include(_core.dogma.getItem(out, 1).message, "TypeError");
                assert.include(_core.dogma.getItem(out, 1).message, "should not be raised");
              }
            });
          }
        });
        suite("when specific error object passed", () => {
          {
            test("when error raised not same as specific error object, wrapper must be returned", () => {
              {
                const w = expected("bonjour");
                const out = w.notToRaise(TypeError("xyz is not a function"));
                assert.strictEqual(out, w);
              }
            });
            test("when error raised same as specific error object, assertion error must be raised", () => {
              {
                const out = _core.dogma.peval(() => {
                  return expected("bonjour").notToRaise(TypeError("value is not a function"));
                });

                assert.equal(_core.dogma.getItem(out, 0), false);
                assert.instanceOf(_core.dogma.getItem(out, 1), AssertionError);
                assert.include(_core.dogma.getItem(out, 1).message, "TypeError");
                assert.include(_core.dogma.getItem(out, 1).message, "should not be raised.");
              }
            });
          }
        });
      }
    });
  }
});