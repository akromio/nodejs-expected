"use strict";

var _core = require("@dogmalang/core");

const pkg = _core.dogma.use(require("../../package"));

const path = _core.dogma.use(require("path"));

const PathWrapper = _core.dogma.use(require("./PathWrapper"));

module.exports = exports = {
  ["name"]: pkg.name,
  ["members"]: {
    ["path"]: (...args) => {
      {
        return PathWrapper({
          'path': path.join(...args)
        });
      }
    }
  }
};