"use strict";

var _core = require("@dogmalang/core");

const {
  deepStrictEqual: equal
} = _core.dogma.use(require("assert"));

const {
  format,
  color
} = _core.dogma.use(require("@akromio/expected-helpers"));

function similarTo(value1, value2) {
  let err;
  {
    if (_core.dogma.isNot(value1, _core.list) && _core.dogma.isNot(value2, _core.list)) {
      if (!_core.dogma.getItem(_core.dogma.peval(() => {
        return equal(value1, value2);
      }), 0)) {
        err = Error(`${format(value1)} should be similar to ${format(value2)}.`);
      }
    } else {
      const arr1 = value1;
      const arr2 = value2;

      if ((0, _core.len)(arr1) != (0, _core.len)(arr2)) {
        err = Error(`${format(arr1)} should have the same length than ${format(arr2)}.`);
      } else {
        const usedIndexes = [];

        for (let i = 0; i < (0, _core.len)(arr1); i += 1) {
          const item1 = _core.dogma.getItem(arr1, i);

          let found = false;

          for (let j = 0; j < (0, _core.len)(arr2); j += 1) {
            if (!_core.dogma.includes(usedIndexes, j)) {
              if (_core.dogma.getItem(_core.dogma.peval(() => {
                return equal(item1, _core.dogma.getItem(arr2, j));
              }), 0)) {
                usedIndexes.push(j);
                found = true;
                break;
              }
            }
          }

          if (!found) {
            err = Error(`${format(item1)} (ix: ${color(i)}) from (${format(arr1)} should be in (${format(arr2)}).`);
            break;
          }
        }
      }
    }
  }
  return err;
}

module.exports = exports = similarTo;