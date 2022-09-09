"use strict";

var _core = require("@dogmalang/core");

const fs = _core.dogma.use(require("@dogmalang/fs.sync"));

const AssertionError = _core.dogma.use(require("./AssertionError"));

const $FileWrapper = class FileWrapper {
  constructor(_) {
    /* c8 ignore next */
    if (_ == null) _ = {};
    (0, _core.expect)('filePath', _['filePath'], _core.text);
    Object.defineProperty(this, 'filePath', {
      value: (0, _core.coalesce)(_['filePath'], null),
      writable: false,
      enumerable: false
    });
    /* c8 ignore start */

    if (this._pvt_04fa2ff536b22375a5b615d9776690ca___init__ instanceof Function) this._pvt_04fa2ff536b22375a5b615d9776690ca___init__(_);
    /* c8 ignore stop */

    /* c8 ignore start */

    if (this._pvt_04fa2ff536b22375a5b615d9776690ca___post__ instanceof Function) this._pvt_04fa2ff536b22375a5b615d9776690ca___post__();
    /* c8 ignore stop */

    /* c8 ignore start */

    if (this._pvt_04fa2ff536b22375a5b615d9776690ca___validate__ instanceof Function) this._pvt_04fa2ff536b22375a5b615d9776690ca___validate__();
    /* c8 ignore stop */
  }

};
const FileWrapper = new Proxy($FileWrapper, {
  apply(receiver, self, args) {
    return new $FileWrapper(...args);
  }

});
module.exports = exports = FileWrapper;

FileWrapper.prototype.toExist = function () {
  const self = this;
  const {
    filePath
  } = self;
  {
    if (!fs.isFile(filePath)) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should exist.`));
    }
  }
  return this;
};

FileWrapper.prototype.notToExist = function () {
  const self = this;
  const {
    filePath
  } = self;
  {
    if (fs.isFile(filePath)) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should not exist.`));
    }
  }
  return this;
};

FileWrapper.prototype.toContain = FileWrapper.prototype.toInclude = function (texts) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("texts", texts, [_core.list, _core.any]);

  if (!_core.dogma.is(texts, _core.list)) texts = (0, _core.list)(texts);
  {
    this.toExist();
    const content = fs.file(filePath).read();

    for (const t of texts) {
      if (!content.includes((0, _core.text)(t))) {
        _core.dogma.raise(AssertionError(`file ${filePath}' should include '${t}'.`));
      }
    }
  }
  return this;
};

FileWrapper.prototype.notToContain = FileWrapper.prototype.notToInclude = function (texts) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("texts", texts, [_core.list, _core.any]);

  if (!_core.dogma.is(texts, _core.list)) texts = (0, _core.list)(texts);
  {
    this.toExist();
    const content = fs.file(filePath).read();

    for (const t of texts) {
      if (content.includes((0, _core.text)(t))) {
        _core.dogma.raise(AssertionError(`file '${filePath}' should not include '${t}'.`));
      }
    }
  }
  return this;
};

FileWrapper.prototype.toBeEmpty = function () {
  const self = this;
  const {
    filePath
  } = self;
  {
    this.toExist();

    if (fs.file(filePath).len() > 0) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should be empty.`));
    }
  }
  return this;
};

FileWrapper.prototype.notToBeEmpty = function () {
  const self = this;
  const {
    filePath
  } = self;
  {
    this.toExist();

    if (fs.file(filePath).len() == 0) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should not be empty.`));
    }
  }
  return this;
};

FileWrapper.prototype.toBeJson = function () {
  const self = this;
  const {
    filePath
  } = self;
  {
    this.toExist();
    {
      const [ok, err] = _core.dogma.peval(() => {
        return _core.json.decode(fs.file(filePath).read("utf-8"));
      });

      if (!ok) {
        _core.dogma.raise(AssertionError(`file '${filePath}' should be JSON.`));
      }
    }
  }
  return this;
};

FileWrapper.prototype.equals = FileWrapper.prototype.equalTo = function (given) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("given", given, _core.text);

  {
    this.toExist();

    if (fs.file(filePath).read("utf8") != given) {
      _core.dogma.raise(AssertionError(`'${filePath}' file content should be '${given}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.notEquals = FileWrapper.prototype.notEqualTo = function (given) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("given", given, _core.text);

  {
    this.toExist();

    if (fs.file(filePath).read("utf8") == given) {
      _core.dogma.raise(AssertionError(`'${filePath}' file content should not be '${given}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.equalToFile = function (path) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("path", path, _core.text);

  {
    this.toExist();

    if (fs.file(filePath).read("utf8") != fs.file(path).read("utf8")) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should be same as file '${path}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.notEqualToFile = function (path) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("path", path, _core.text);

  {
    this.toExist();

    if (fs.file(filePath).read("utf8") == fs.file(path).read("utf8")) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should not be same as file '${path}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.toStartWith = function (prefix) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("prefix", prefix, _core.text);

  {
    this.toExist();

    if (!fs.file(filePath).read("utf-8").startsWith(prefix)) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should start with '${prefix}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.notToStartWith = function (prefix) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("prefix", prefix, _core.text);

  {
    this.toExist();

    if (fs.file(filePath).read("utf-8").startsWith(prefix)) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should not start with '${prefix}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.toEndWith = function (suffix) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("suffix", suffix, _core.text);

  {
    this.toExist();

    if (!fs.file(filePath).read("utf-8").endsWith(suffix)) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should end with '${suffix}'.`));
    }
  }
  return this;
};

FileWrapper.prototype.notToEndWith = function (suffix) {
  const self = this;
  const {
    filePath
  } = self;
  /* c8 ignore next */

  _core.dogma.expect("suffix", suffix, _core.text);

  {
    this.toExist();

    if (fs.file(filePath).read("utf-8").endsWith(suffix)) {
      _core.dogma.raise(AssertionError(`file '${filePath}' should not end with '${suffix}'.`));
    }
  }
  return this;
};