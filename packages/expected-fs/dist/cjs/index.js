"use strict";

var _core = require("@dogmalang/core");

const pkg = _core.dogma.use(require("../../package"));

const path = _core.dogma.use(require("@dogmalang/path"));

const DirWrapper = _core.dogma.use(require("./DirWrapper"));

const FileWrapper = _core.dogma.use(require("./FileWrapper"));

const FilesWrapper = _core.dogma.use(require("./FilesWrapper"));

module.exports = exports = {
  ["name"]: pkg.name,
  ["members"]: {
    ["dir"]: (...args) => {
      {
        return DirWrapper({
          'dirPath': path.join(...args)
        });
      }
    },
    ["file"]: (...args) => {
      {
        return FileWrapper({
          'filePath': path.join(...args)
        });
      }
    },
    ["files"]: (...args) => {
      {
        return FilesWrapper({
          'filePaths': args
        });
      }
    }
  }
};