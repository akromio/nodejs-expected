"use strict";

var _core = require("@dogmalang/core");
const assert = _core.dogma.use(require("assert"));
const chalk = _core.dogma.use(require("chalk"));
const get = _core.dogma.use(require("lodash.get"));
const uuid = _core.dogma.use(require("uuid"));
const stream = _core.dogma.use(require("stream"));
const Ajv = _core.dogma.use(require("ajv"));
const {
  format,
  color
} = _core.dogma.use(require("@akromio/expected-helpers"));
const similarTo = _core.dogma.use(require("./utils/similarTo"));
const AssertionError = _core.dogma.use(require("./AssertionError"));
const ValuesWrapper = _core.dogma.use(require("./ValuesWrapper"));
const $ValueWrapper = class ValueWrapper {
  constructor(_) {
    /* c8 ignore start */if (_ == null) _ = {};
    /* c8 ignore stop */
    Object.defineProperty(this, 'value', {
      value: (0, _core.coalesce)(_['value'], null),
      writable: false,
      enumerable: false
    });
    Object.defineProperty(this, 'originalValue', {
      value: (0, _core.coalesce)(_['originalValue'], null),
      writable: false,
      enumerable: false
    });
    /* c8 ignore start */
    if (_['fulfilled'] != null) (0, _core.expect)('fulfilled', _['fulfilled'], _core.bool); /* c8 ignore stop */
    Object.defineProperty(this, 'fulfilled', {
      value: (0, _core.coalesce)(_['fulfilled'], null),
      writable: false,
      enumerable: false
    });
    /* c8 ignore start */
    if (this._pvt_62bf16e296951a4d67bb347ede049a31___init__ instanceof Function) this._pvt_62bf16e296951a4d67bb347ede049a31___init__(_); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_62bf16e296951a4d67bb347ede049a31___post__ instanceof Function) this._pvt_62bf16e296951a4d67bb347ede049a31___post__(); /* c8 ignore stop */
    /* c8 ignore start */
    if (this._pvt_62bf16e296951a4d67bb347ede049a31___validate__ instanceof Function) this._pvt_62bf16e296951a4d67bb347ede049a31___validate__(); /* c8 ignore stop */
  }
};

const ValueWrapper = new Proxy($ValueWrapper, {
  apply(receiver, self, args) {
    return new $ValueWrapper(...args);
  }
});
module.exports = exports = ValueWrapper;
const Self = ValueWrapper;
ValueWrapper.prototype.it = ValueWrapper.prototype.item = function (i) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("i", i, _core.num);
  {
    return this.get(`[${i}]`);
  }
};
Object.defineProperty(ValueWrapper.prototype, "first", {
  enum: true,
  get: function () {
    const self = this;
    const {
      value,
      originalValue
    } = self;
    {
      return this.item(0);
    }
  }
});
Object.defineProperty(ValueWrapper.prototype, "second", {
  enum: true,
  get: function () {
    const self = this;
    const {
      value,
      originalValue
    } = self;
    {
      return this.item(1);
    }
  }
});
ValueWrapper.prototype.items = function (...indexes) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    const root = originalValue !== null && originalValue !== void 0 ? originalValue : value;
    let values;
    if ((0, _core.len)(indexes) == 0) {
      values = root;
    } else {
      values = [];
      for (const i of indexes) {
        values.push(_core.dogma.getItem(root, i));
      }
    }
    return ValuesWrapper({
      'originalValue': root,
      'values': values
    });
  }
};
ValueWrapper.prototype.member = function (name) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("name", name, _core.text);
  {
    return this.get(name);
  }
};
ValueWrapper.prototype.members = function (...names) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    const root = originalValue !== null && originalValue !== void 0 ? originalValue : value;
    const values = [];
    for (const exp of names) {
      /*c8 ignore next*/_core.dogma.expect('exp', exp, _core.text);
      values.push(get(root, exp));
    }
    return ValuesWrapper({
      'originalValue': root,
      'values': values
    });
  }
};
ValueWrapper.prototype.len = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    return Self({
      'originalValue': this.value,
      'value': (0, _core.len)(this.value)
    });
  }
};
ValueWrapper.prototype.get = function (exp) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("exp", exp, [_core.text, _core.num]);
  {
    const root = originalValue !== null && originalValue !== void 0 ? originalValue : value;
    return Self({
      'value': get(root, exp),
      'originalValue': root
    });
  }
};
ValueWrapper.prototype.toRaise = ValueWrapper.prototype.toThrow = function (errExpected) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value();
      });
      if (ok) {
        _core.dogma.raise(AssertionError("error should be raised."));
      } else {
        if (errExpected) {
          {
            const Type = errExpected;
            if (_core.dogma.is(Type, _core.func)) {
              if (_core.dogma.isNot(res, Type)) {
                _core.dogma.raise(AssertionError(`error of type ${color(Type.name)} should be raised.`));
              }
            } else {
              if (_core.dogma.is(errExpected, _core.text) && _core.dogma.is(res, Error)) {
                if (res.message != errExpected) {
                  _core.dogma.raise(AssertionError(`Error message expected: ${color(errExpected)}. Got: ${color(res.message)}.`));
                }
              } else if (!_core.dogma.getItem(_core.dogma.peval(() => {
                return assert.deepEqual(res, errExpected);
              }), 0)) {
                _core.dogma.raise(AssertionError(`${color((0, _core.typename)(errExpected) + ': ' + errExpected.message)} should be raised.`));
              }
            }
          }
        }
      }
    }
  }
  return this;
};
ValueWrapper.prototype.notToRaise = ValueWrapper.prototype.notToThrow = function (err) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value();
      });
      if (!ok) {
        if (!err) {
          _core.dogma.raise(AssertionError("error should not be raised."));
        } else {
          {
            const Type = err;
            if (_core.dogma.is(Type, _core.func)) {
              if (_core.dogma.is(res, Type)) {
                _core.dogma.raise(AssertionError(`error of type ${color(Type.name)} should not be raised.`));
              }
            } else {
              if (_core.dogma.getItem(_core.dogma.peval(() => {
                return assert.deepEqual(res, err);
              }), 0)) {
                _core.dogma.raise(AssertionError(`${color((0, _core.typename)(err) + ': ' + err.message)} should not be raised.`));
              }
            }
          }
        }
      }
    }
  }
  return this;
};
ValueWrapper.prototype.toBeInstanceOf = ValueWrapper.prototype.toBe = function (Type) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("Type", Type);
  {
    if (_core.dogma.isNot(value, Type)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be instance of ${color(Type.name)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeInstanceOf = ValueWrapper.prototype.notToBe = function (Type) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("Type", Type);
  {
    if (_core.dogma.is(value, Type)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be instance of ${color(Type.name)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeDuplexStream = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, stream.Duplex)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be a duplex stream.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeDuplexStream = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, stream.Duplex)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be a duplex stream.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeReadableStream = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (!stream.isReadable(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be a readable stream.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeReadableStream = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (stream.isReadable(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be a readable stream.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeNull = ValueWrapper.prototype.toBeNil = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value != null) {
      _core.dogma.raise(AssertionError(`${format(value)} should be nil/null.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeNull = ValueWrapper.prototype.notToBeNil = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value == null) {
      _core.dogma.raise(AssertionError("value should not be nil/null."));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeBoolean = ValueWrapper.prototype.toBeBool = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.bool)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be boolean.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeBoolean = ValueWrapper.prototype.notToBeBool = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.bool)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be boolean.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeDate = ValueWrapper.prototype.toBeTimestamp = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.timestamp)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be date.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeDate = ValueWrapper.prototype.notToBeTimestamp = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.timestamp)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be date.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeString = ValueWrapper.prototype.toBeText = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.text)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be text/string.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeString = ValueWrapper.prototype.notToBeText = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.text)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be text/string.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeNumber = ValueWrapper.prototype.toBeNum = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.num)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be a number.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeNumber = ValueWrapper.prototype.notToBeNum = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.num)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be a number.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeArray = ValueWrapper.prototype.toBeList = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.list)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be an array or list.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeArray = ValueWrapper.prototype.notToBeList = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.list)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be an array or list.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeSet = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.set)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be a set.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeSet = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.set)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be a set.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeObject = ValueWrapper.prototype.toBeMap = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.map)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be an object or map.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeObject = ValueWrapper.prototype.notToBeMap = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.map)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be an object or map.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeFunction = ValueWrapper.prototype.toBeFn = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.func)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be a function.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeFunction = ValueWrapper.prototype.notToBeFn = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.func)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be a function.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeCallable = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.isNot(value, _core.func)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be callable.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeCallable = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.is(value, _core.func)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be callable.`));
    }
  }
  return this;
};
ValueWrapper.prototype.equalTo = ValueWrapper.prototype.equals = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || !_core.dogma.getItem(_core.dogma.peval(() => {
      return assert.deepEqual(value, another);
    }), 0)) {
      const actual = format(value);
      const expected = format(another);
      const opts = `${actual} should be equal to ${expected}.`;
      _core.dogma.raise(AssertionError(opts));
    }
  }
  return this;
};
ValueWrapper.prototype.notEqualTo = ValueWrapper.prototype.notEquals = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) == (0, _core.typename)(another) && _core.dogma.getItem(_core.dogma.peval(() => {
      return assert.deepEqual(value, another);
    }), 0)) {
      const actual = format(value);
      const opts = `value should not be equal to: ${actual}.`;
      _core.dogma.raise(AssertionError(opts));
    }
  }
  return this;
};
ValueWrapper.prototype.sameAs = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value !== another) {
      _core.dogma.raise(AssertionError(`${format(value)} should be same as ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notSameAs = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (value === another) {
      _core.dogma.raise(AssertionError(`value should not be same as ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.lessThan = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || value >= another) {
      _core.dogma.raise(AssertionError(`${format(value)} should be less than ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.lessThanOrEqualTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || value > another) {
      _core.dogma.raise(AssertionError(`${format(value)} should be less than or equal to ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.greaterThan = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || _core.dogma.includes(["bool"], (0, _core.typename)(value)) || value <= another) {
      _core.dogma.raise(AssertionError(`${format(value)} should be greater than ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.greaterThanOrEqualTo = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another);
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(another) || _core.dogma.includes(["bool"], (0, _core.typename)(value)) || value < another) {
      _core.dogma.raise(AssertionError(`${format(value)} should be greater than or equal to ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.between = function (val1, val2) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) != (0, _core.typename)(val1) || (0, _core.typename)(value) != (0, _core.typename)(val2) || value < val1 || value > val2) {
      _core.dogma.raise(AssertionError(`${format(value)} should be between ${format(val1)} and ${format(val2)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notBetween = function (val1, val2) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.typename)(value) == (0, _core.typename)(val1) && (0, _core.typename)(value) == (0, _core.typename)(val2) && value >= val1 && value <= val2) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be between ${format(val1)} and ${format(val2)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toContain = ValueWrapper.prototype.toInclude = function (item) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value.includes(item);
      });
      if (!ok || !res) {
        _core.dogma.raise(AssertionError(`${format(value)} should include ${format(item)}.`));
      }
    }
  }
  return this;
};
ValueWrapper.prototype.notToContain = ValueWrapper.prototype.notToInclude = function (item) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      const [ok, res] = _core.dogma.peval(() => {
        return value.includes(item);
      });
      if (ok && res) {
        _core.dogma.raise(AssertionError(`${format(value)} should not include ${format(item)}.`));
      }
    }
  }
  return this;
};
ValueWrapper.prototype.into = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another, _core.list);
  {
    if (!another.includes(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be in ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notInto = function (another) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("another", another, _core.list);
  {
    if (another.includes(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be in ${format(another)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toHave = function (members) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("members", members, [_core.text, _core.list, _core.map]);
  {
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
              _core.dogma.raise(AssertionError(`${format(value)} should have ${color(mem)} to ${format(val)}. Got: ${format(value[mem])}.`));
            }
          }
        }
      }
    }
  }
  return this;
};
ValueWrapper.prototype.notToHave = function (members) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("members", members, [_core.text, _core.list, _core.map]);
  {
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
  return this;
};
ValueWrapper.prototype.toBeEmpty = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if ((0, _core.len)(value) != 0) {
      _core.dogma.raise(AssertionError(`${format(value)} should be empty.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToBeEmpty = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (_core.dogma.includes(["bool", "num"], (0, _core.typename)(value)) || (0, _core.len)(value) == 0) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be empty.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toHaveLen = ValueWrapper.prototype.toHaveLength = function (size) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("size", size, [_core.num, _core.list]);
  {
    {
      const received = (0, _core.len)(value);
      if (received != size) {
        _core.dogma.raise(AssertionError(`${format(value)} should have length to ${color(size)}. Got: ${color(received)}.`));
      }
    }
  }
  return this;
};
ValueWrapper.prototype.notToHaveLen = ValueWrapper.prototype.notToHaveLength = function (size) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("size", size, _core.num);
  {
    {
      const received = (0, _core.len)(value);
      if (received == size) {
        _core.dogma.raise(AssertionError(`${format(value)} should not have length to ${color(size)}.`));
      }
    }
  }
  return this;
};
ValueWrapper.prototype.similarTo = function (other) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      let err = similarTo(value, other);
      if (err) {
        _core.dogma.raise(AssertionError(err.message));
      }
    }
  }
  return this;
};
ValueWrapper.prototype.notSimilarTo = function (other) {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    {
      let err = similarTo(value, other);
      if (!err) {
        _core.dogma.raise(AssertionError(`${format(value)} should not be similar to ${format(other)}.`));
      }
    }
  }
  return this;
};
ValueWrapper.prototype.toMatch = ValueWrapper.prototype.like = function (pattern) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("pattern", pattern, _core.text);
  {
    if (!(0, _core.re)(pattern).test(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be like ${format(pattern)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToMatch = ValueWrapper.prototype.notLike = function (pattern) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("pattern", pattern, _core.text);
  {
    if ((0, _core.re)(pattern).test(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not be like ${format(pattern)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toStartWith = function (prefix) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("prefix", prefix, _core.text);
  {
    if (!(0, _core.text)(value).startsWith(prefix)) {
      _core.dogma.raise(AssertionError(`${format(value)} should start with ${format(prefix)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToStartWith = function (prefix) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("prefix", prefix, _core.text);
  {
    if ((0, _core.text)(value).startsWith(prefix)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not start with ${format(prefix)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toEndWith = function (suffix) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("suffix", suffix, _core.text);
  {
    if (!(0, _core.text)(value).endsWith(suffix)) {
      _core.dogma.raise(AssertionError(`${format(value)} should end with ${format(suffix)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.notToEndWith = function (suffix) {
  const self = this;
  const {
    value,
    originalValue
  } = self; /* c8 ignore next */
  _core.dogma.expect("suffix", suffix, _core.text);
  {
    if ((0, _core.text)(value).endsWith(suffix)) {
      _core.dogma.raise(AssertionError(`${format(value)} should not end with ${format(suffix)}.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toHaveBeenFulfilled = ValueWrapper.prototype.toBeFulfilled = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (this.fulfilled !== true) {
      _core.dogma.raise(AssertionError(`value should have been fulfilled.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toHaveBeenRejected = ValueWrapper.prototype.toBeRejected = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (this.fulfilled !== false) {
      _core.dogma.raise(AssertionError(`value should have been rejected.`));
    }
  }
  return this;
};
ValueWrapper.prototype.toBeUuid = function () {
  const self = this;
  const {
    value,
    originalValue
  } = self;
  {
    if (!uuid.validate(value)) {
      _core.dogma.raise(AssertionError(`${format(value)} should be a valid UUID.`));
    }
  }
  return this;
};