"use strict";

var _core = require("@dogmalang/core");

const path = _core.dogma.use(require("@dogmalang/path"));

const fs = _core.dogma.use(require("@dogmalang/fs.sync"));

const {
  color
} = _core.dogma.use(require("@akromio/expected-helpers"));

const AssertionError = _core.dogma.use(require("./AssertionError"));

const $FilesWrapper = class FilesWrapper {
  constructor(_) {
    /* c8 ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('filePaths', _['filePaths'], _core.dogma.TypeDef({
      name: 'inline',
      types: [_core.text],
      min: 1,
      max: null
    }));
    Object.defineProperty(this, 'filePaths', {
      value: (0, _core.coalesce)(_['filePaths'], null),
      writable: false,
      enumerable: false
    });
    /* c8 ignore start */

    if (this._pvt_37ddada9328d9077800eaf5947215502___init__ instanceof Function) this._pvt_37ddada9328d9077800eaf5947215502___init__(_);
    /* c8 ignore stop */

    /* c8 ignore start */

    if (this._pvt_37ddada9328d9077800eaf5947215502___post__ instanceof Function) this._pvt_37ddada9328d9077800eaf5947215502___post__();
    /* c8 ignore stop */

    /* c8 ignore start */

    if (this._pvt_37ddada9328d9077800eaf5947215502___validate__ instanceof Function) this._pvt_37ddada9328d9077800eaf5947215502___validate__();
    /* c8 ignore stop */
  }

};
const FilesWrapper = new Proxy($FilesWrapper, {
  apply(receiver, self, args) {
    return new $FilesWrapper(...args);
  }

});
module.exports = exports = FilesWrapper;

FilesWrapper.prototype.toExist = function () {
  const self = this;
  {
    for (const filePath of this.filePaths) {
      if (!fs.isFile(filePath)) {
        _core.dogma.raise(AssertionError(`file '${color(filePath)}' should exist.`));
      }
    }
  }
  return this;
};

FilesWrapper.prototype.notToExist = function () {
  const self = this;
  {
    for (const filePath of this.filePaths) {
      if (fs.isFile(filePath)) {
        _core.dogma.raise(AssertionError(`file '${color(filePath)}' should not exist.`));
      }
    }
  }
  return this;
};