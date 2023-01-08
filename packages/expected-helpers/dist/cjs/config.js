"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.segmentLen = exports.maxLen = void 0;
var _core = require("@dogmalang/core");
const maxLen = 200;
exports.maxLen = maxLen;
const segmentLen = maxLen / 2 - 6;
exports.segmentLen = segmentLen;