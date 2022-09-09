# `@akromio/peval`

[![NPM version](https://img.shields.io/npm/v/@akromio/peval.svg)](https://npmjs.org/package/@akromio/peval)
[![Total downloads](https://img.shields.io/npm/dt/@akromio/peval.svg)](https://npmjs.org/package/@akromio/peval)

A helper function to run a function and to return an array with two elements:

- The first indicating if the call ended ok: true or false.

- The second indicating the value returned or the error raised.

_Product of Spain, made in Valencia by Sia Codelabs._

## Use

```typescript
import peval from "@akromio/peval"

// ...
const [ok, value] = peval(() => fun(1, 2, 3))

if (ok) {
  // value contains the value returned by the call
} else {
  // value contains the error raised
}
```
