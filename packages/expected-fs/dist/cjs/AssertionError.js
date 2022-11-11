"use strict";

var _core = require("@dogmalang/core");
const {
  AssertionError
} = _core.dogma.use(require("assert"));
module.exports = exports = (0, _core.proxy)(AssertionError, {
  'apply': (target, ths, args) => {
    /* c8 ignore next */_core.dogma.expect("target", target); /* c8 ignore next */
    _core.dogma.expect("args", args);
    {
      return new AssertionError({
        message: args[0]
      });
    }
  }
});