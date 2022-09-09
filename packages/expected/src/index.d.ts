/// <reference types="node" />

import ValueWrapper from "./ValueWrapper"

declare global {
  /**
   * Returns a value wrapper for performing assertions.
   *
   * @param value - Value to wrap.
   * @returns Value wrapper to use.
   */
  function expected(value?: any): ValueWrapper

  namespace expected {
    function plugin(name: string): (value?: any) => ValueWrapper
  }
}

export default expected
