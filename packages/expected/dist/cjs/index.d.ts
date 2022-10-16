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
    /**
     * Loads a given plugin.
     *
     * @param pi - Plugin declaration to load.
     */
    function plugin(pi: any): ValueWrapper
  }
}

export default expected
