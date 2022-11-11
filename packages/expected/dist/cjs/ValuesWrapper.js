"use strict";

var _core = require("@dogmalang/core");
const assert = _core.dogma.use(require("assert"));
const get = _core.dogma.use(require("lodash.get"));
const uuid = _core.dogma.use(require("uuid"));
const Ajv = _core.dogma.use(require("ajv"));
const {
  format,
  color
} = _core.dogma.use(require("@akromio/expected-helpers"));
const AssertionError = _core.dogma.use(require("./AssertionError"));
const $ValuesWrapper = class ValuesWrapper {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */
    (0, _core.expect)('values', _['values'], _core.list);
    Object.defineProperty(this, 'values', {
      value: (0, _core.coalesce)(_['values'], null),
      writable: false,
      enumerable: false
    });
    (0, _core.expect)('originalValue', _['originalValue'], null);
    Object.defineProperty(this, 'originalValue', {
      value: (0, _core.coalesce)(_['originalValue'], null),
      writable: false,
      enumerable: false
    });
    /* c8 ignore start */
    if (this._pvt_d21832db0b8e360611e08d1f3f580d4d___init__ instanceof Function) this._pvt_d21832db0b8e360611e08d1f3f580d4d___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_d21832db0b8e360611e08d1f3f580d4d___post__ instanceof Function) this._pvt_d21832db0b8e360611e08d1f3f580d4d___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_d21832db0b8e360611e08d1f3f580d4d___validate__ instanceof Function) this._pvt_d21832db0b8e360611e08d1f3f580d4d___validate__(); /* c8 ignore stop */
  }
};

const ValuesWrapper = new Proxy($ValuesWrapper, {
  apply(receiver, self, args) {
    return new $ValuesWrapper(...args);
  }
});
module.exports = exports = ValuesWrapper;
const Self = ValuesWrapper;
ValuesWrapper.prototype.toBeInstanceOf = ValuesWrapper.prototype.toBe = function (Type) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("Type", Type);
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, Type)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be instance of ${color(Type.name)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeInstanceOf = ValuesWrapper.prototype.notToBe = function (Type) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("Type", Type);
  {
    for (const value of values) {
      if (_core.dogma.is(value, Type)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be instance of ${color(Type.name)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeNull = ValuesWrapper.prototype.toBeNil = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (value != null) {
        _core.dogma.raise(AssertionError(`${format(value)} should be nil/null.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeNull = ValuesWrapper.prototype.notToBeNil = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (value == null) {
        _core.dogma.raise(AssertionError("value should not be nil/null."));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeBoolean = ValuesWrapper.prototype.toBeBool = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.bool)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be boolean.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeBoolean = ValuesWrapper.prototype.notToBeBool = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.bool)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be boolean.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeDate = ValuesWrapper.prototype.toBeTimestamp = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.timestamp)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be date.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeDate = ValuesWrapper.prototype.notToBeTimestamp = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.timestamp)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be date.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeString = ValuesWrapper.prototype.toBeText = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.text)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be text/string.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeString = ValuesWrapper.prototype.notToBeText = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.text)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be text/string.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeNumber = ValuesWrapper.prototype.toBeNum = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.num)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be a number.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeNumber = ValuesWrapper.prototype.notToBeNum = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.num)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be a number.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeArray = ValuesWrapper.prototype.toBeList = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.list)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be an array or list.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeArray = ValuesWrapper.prototype.notToBeList = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.list)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be an array or list.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeSet = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.set)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be a set.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeSet = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.set)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be a set.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeObject = ValuesWrapper.prototype.toBeMap = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.map)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be an object or map.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeObject = ValuesWrapper.prototype.notToBeMap = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.map)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be an object or map.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeFunction = ValuesWrapper.prototype.toBeFn = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.func)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be a function.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeFunction = ValuesWrapper.prototype.notToBeFn = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.func)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be a function.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeCallable = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.isNot(value, _core.func)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be callable.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeCallable = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.is(value, _core.func)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be callable.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.lessThan = function (another) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    for (const value of values) {
      if ((0, _core.typename)(value) != (0, _core.typename)(another) || value >= another) {
        _core.dogma.raise(AssertionError(`${format(value)} should be less than ${format(another)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.lessThanOrEqualTo = function (another) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    for (const value of values) {
      if ((0, _core.typename)(value) != (0, _core.typename)(another) || value > another) {
        _core.dogma.raise(AssertionError(`${format(value)} should be less than or equal to ${format(another)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.greaterThan = function (another) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    for (const value of values) {
      if ((0, _core.typename)(value) != (0, _core.typename)(another) || _core.dogma.includes(["bool"], (0, _core.typename)(value)) || value <= another) {
        _core.dogma.raise(AssertionError(`${format(value)} should be greater than ${format(another)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.greaterThanOrEqualTo = function (another) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    for (const value of values) {
      if ((0, _core.typename)(value) != (0, _core.typename)(another) || _core.dogma.includes(["bool"], (0, _core.typename)(value)) || value < another) {
        _core.dogma.raise(AssertionError(`${format(value)} should be greater than or equal to ${format(another)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.between = function (val1, val2) {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if ((0, _core.typename)(value) != (0, _core.typename)(val1) || (0, _core.typename)(value) != (0, _core.typename)(val2) || value < val1 || value > val2) {
        _core.dogma.raise(AssertionError(`${format(value)} should be between ${format(val1)} and ${format(val2)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notBetween = function (val1, val2) {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if ((0, _core.typename)(value) == (0, _core.typename)(val1) && (0, _core.typename)(value) == (0, _core.typename)(val2) && value >= val1 && value <= val2) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be between ${format(val1)} and ${format(val2)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.into = function (another) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another, _core.list);
  {
    for (const value of values) {
      if (!another.includes(value)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be in ${format(another)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notInto = function (another) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another, _core.list);
  {
    for (const value of values) {
      if (another.includes(value)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be in ${format(another)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toHave = function (members) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("members", members, [_core.text, _core.list, _core.map]);
  {
    for (const value of values) {
      if (_core.dogma.isNot(members, [_core.list, _core.map])) {
        members = [members];
      }
      if (_core.dogma.is(members, _core.list)) {
        for (const mem of members) {
          if (_core.dogma.getItem(value, mem) == null) {
            _core.dogma.raise(AssertionError(`${format(value)} should have member ${color(mem)}.`));
          }
        }
      } else {
        for (const [mem, val] of Object.entries(members)) {
          {
            {
              const [ok, received] = _core.dogma.peval(() => {
                return assert.deepEqual(_core.dogma.getItem(value, mem), val);
              });
              if (!ok) {
                _core.dogma.raise(AssertionError(`${format(value)} should have ${color(mem)} to ${format(val)}.`));
              }
            }
          }
        }
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToHave = function (members) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("members", members, [_core.text, _core.list, _core.map]);
  {
    for (const value of values) {
      if (_core.dogma.isNot(members, [_core.list, _core.map])) {
        members = [members];
      }
      if (_core.dogma.is(members, _core.list)) {
        for (const mem of members) {
          if (_core.dogma.getItem(value, mem) !== undefined) {
            _core.dogma.raise(AssertionError(`${format(value)} should not have member ${color(mem)}.`));
          }
        }
      } else {
        for (const [mem, val] of Object.entries(members)) {
          {
            {
              const received = _core.dogma.getItem(value, mem);
              if (received == val) {
                _core.dogma.raise(AssertionError(`${format(value)} should not have ${color(mem)} to ${format(val)}.`));
              }
            }
          }
        }
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeEmpty = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if ((0, _core.len)(value) != 0) {
        _core.dogma.raise(AssertionError(`${format(value)} should be empty.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToBeEmpty = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (_core.dogma.includes(["bool", "num"], (0, _core.typename)(value)) || (0, _core.len)(value) == 0) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be empty.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toMatch = ValuesWrapper.prototype.like = function (pattern) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("pattern", pattern, _core.text);
  {
    for (const value of values) {
      if (!(0, _core.re)(pattern).test(value)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be like ${format(pattern)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.notToMatch = ValuesWrapper.prototype.notLike = function (pattern) {
  const self = this;
  const {
    values,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("pattern", pattern, _core.text);
  {
    for (const value of values) {
      if ((0, _core.re)(pattern).test(value)) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be like ${format(pattern)}.`));
      }
    }
  }
  return this;
};
ValuesWrapper.prototype.toBeUuid = function () {
  const self = this;
  const {
    values,
    originalValue
  } = self;
  {
    for (const value of values) {
      if (!uuid.validate(value)) {
        _core.dogma.raise(AssertionError(`${format(value)} should be a valid UUID.`));
      }
    }
  }
  return this;
};