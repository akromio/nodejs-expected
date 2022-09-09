"use strict";

var _core = require("@dogmalang/core");

const path = _core.dogma.use(require("path"));

const {
  assert
} = _core.dogma.use(require("chai"));

const expected = _core.dogma.use(require("../.."));

module.exports = exports = suite(__filename, () => {
  {
    test("when imported, api must be exported", () => {
      {
        assert.typeOf(expected, "function");
      }
    });
    suite("expected.plugin()", () => {
      {
        test("when plugin is text, the module must be loaded and its members added", () => {
          {
            expected.plugin(path.join(__dirname, "../data/fs"));
            assert.isFunction(expected.file);
            assert.isFunction(expected.dir);
          }
        });
        test("when plugin is map, its members must be added", () => {
          {
            expected.plugin(_core.dogma.use(require(path.join(__dirname, "../data/fs2"))));
            assert.isFunction(expected.FILE);
            assert.isFunction(expected.DIR);
          }
        });
        test("when plugin already loaded, no member added", () => {
          {
            expected.plugin(_core.dogma.use(require(path.join(__dirname, "../data/fs2"))));
          }
        });
      }
    });
  }
});