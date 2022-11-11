"use strict";

var _core = require("@dogmalang/core");
const path = _core.dogma.use(require("path"));
const {
  color
} = _core.dogma.use(require("@akromio/expected-helpers"));
const AssertionError = _core.dogma.use(require("./AssertionError"));
const $PathWrapper = class PathWrapper {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */
    (0, _core.expect)('path', _['path'], _core.text);
    Object.defineProperty(this, 'path', {
      value: (0, _core.coalesce)(_['path'], null),
      writable: false,
      enumerable: false
    });
    /* c8 ignore start */
    if (this._pvt_ce795ef07784d2ab05c74c20a14e8b3c___init__ instanceof Function) this._pvt_ce795ef07784d2ab05c74c20a14e8b3c___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_ce795ef07784d2ab05c74c20a14e8b3c___post__ instanceof Function) this._pvt_ce795ef07784d2ab05c74c20a14e8b3c___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_ce795ef07784d2ab05c74c20a14e8b3c___validate__ instanceof Function) this._pvt_ce795ef07784d2ab05c74c20a14e8b3c___validate__(); /* c8 ignore stop */
  }
};

const PathWrapper = new Proxy($PathWrapper, {
  apply(receiver, self, args) {
    return new $PathWrapper(...args);
  }
});
module.exports = exports = PathWrapper;
PathWrapper.prototype.equalTo = function (p) {
  const self = this; /* c8 ignore next */
  _core.dogma.expect("p", p, _core.text);
  {
    const p1 = normalize(this.path);
    const p2 = normalize(p);
    if (p1 != p2) {
      _core.dogma.raise(AssertionError(`path ${color(p1)} should be equal to ${color(p2)}.`));
    }
  }
  return this;
};
function normalize(p) {
  /* c8 ignore next */_core.dogma.expect("p", p, _core.text);
  {
    return p.replace((0, _core.re)("^[a-zA-Z]:"), "").replace((0, _core.re)("\\\\", "g"), "/");
  }
}