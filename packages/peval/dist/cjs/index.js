"use strict";

var _core = require("@dogmalang/core");

function pEval(call) {
  let result = [];
  /* c8 ignore next */

  _core.dogma.expect("call", call, _core.func);

  {
    try {
      result = [true, call()];
    } catch (e) {
      result = [false, e];
    }
  }
  return result;
}

module.exports = exports = pEval;