/// <reference types="node" />
/// <reference types="@akromio/expected" />

import PathWrapper from "./PathWrapper"

declare global {
  namespace expected {
    /**
     * Returns a wrapper to perform assertions on a given file.
     *
     * @param path - Path to wrap.
     */
    function path(...path: string[]): PathWrapper
  }
}

export default expected
