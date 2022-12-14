"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = color;
exports.format = format;
var _core = require("@dogmalang/core");
const chalk = _core.dogma.use(require("chalk"));
const {
  maxLen,
  segmentLen
} = _core.dogma.use(require("./config"));
function format(value) {
  let repr;
  {
    if ((0, _core.len)(repr = (0, _core.fmt)(value)) > maxLen) {
      repr = _core.dogma.getSlice(repr, 0, segmentLen) + "..." + _core.dogma.getSlice(repr, -segmentLen, -1);
    }
    repr = color(`<${(0, _core.typename)(value)}> ` + repr);
  }
  return repr;
}
function color(value) {
  {
    return chalk.bold(value);
  }
}