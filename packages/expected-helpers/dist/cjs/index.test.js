"use strict";

var _core = require("@dogmalang/core");
const {
  assert
} = _core.dogma.use(require("chai"));
const index = _core.dogma.use(require("./index"));
const {
  maxLen
} = _core.dogma.use(require("./config"));
module.exports = exports = suite(__filename, () => {
  {
    test("when imported, api must be exported", () => {
      {
        assert.isFunction(index.format);
        assert.isFunction(index.color);
      }
    });
    suite("color()", () => {
      {
        const {
          color
        } = index;
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
        } = index;
        test("when value length greater than max length, value must be reduced", () => {
          {
            const value = "ci" + "x".repeat(maxLen) + "ao";
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