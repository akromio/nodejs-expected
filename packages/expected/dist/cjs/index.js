"use strict";

var _core = require("@dogmalang/core");
const ValueWrapper = _core.dogma.use(require("./ValueWrapper"));
function expected(value) {
  {
    return ValueWrapper({
      'value': value
    });
  }
}
module.exports = exports = expected;
const plugins = {};
expected.plugin = plugin => {
  /* c8 ignore next */_core.dogma.expect("plugin", plugin, [_core.text, _core.map]);
  {
    if (_core.dogma.is(plugin, _core.text)) {
      plugin = _core.dogma.use(require(plugin));
    }
    if (!_core.dogma.getItem(plugins, plugin.name)) {
      _core.dogma.setItem("=", plugins, plugin.name, plugin);
      for (const [key, val] of Object.entries(plugin.members)) {
        {
          if (key != "plugin") {
            _core.dogma.setItem("=", expected, key, val);
          }
        }
      }
    }
    return expected;
  }
};