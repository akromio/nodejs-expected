"use strict";

var _core = require("@dogmalang/core");
const pkg = _core.dogma.use(require("../.."));
const expected = _core.dogma.use(require("@akromio/expected"));
suite(__filename, () => {
  {
    test("when imported, name and members returned", () => {
      {
        expected(pkg).member("name").toInclude("path").member("members").toHave(["path"]);
      }
    });
  }
});