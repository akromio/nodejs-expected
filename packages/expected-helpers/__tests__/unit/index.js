"use strict";

var _core = require("@dogmalang/core");

const {
  assert
} = _core.dogma.use(require("chai"));

const pkg = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when imported, api must be exported", () => {
      {
        assert.isFunction(pkg.format);
        assert.isFunction(pkg.color);
      }
    });
    suite("color()", () => {
      {
        const {
          color
        } = pkg;
        test("when value passed, this must be colored", () => {
          {
            const value = "hello";
            const out = color(value);
            assert.include(out, value);
          }
        });
      }
    });
    suite("format()", () => {
      {
        const {
          format
        } = pkg;
        test("when value length greater than max length, value must be reduced", () => {
          {
            const value = "ci" + "x".repeat(100) + "ao";
            const out = format(value);
            assert.isAbove((0, _core.len)(out), 30);
            assert.include(out, "cix");
            assert.include(out, "xao");
          }
        });
        test("when value length less than max length, colored value must be returned", () => {
          {
            const value = "ciao";
            const out = format(value);
            assert.isAbove((0, _core.len)(out), (0, _core.len)(value));
            assert.include(out, "ciao");
          }
        });
      }
    });
  }
});