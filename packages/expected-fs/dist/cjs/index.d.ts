/// <reference types="node" />
/// <reference types="@akromio/expected" />

import FileWrapper from "./FileWrapper"
import DirWrapper from "./DirWrapper"

declare global {
  namespace expected {
    /**
     * Returns a wrapper to perform assertions on a given file.
     *
     * @param path - The file path.
     */
    function file(...path: string[]): FileWrapper

    /**
     * Returns a wrapper to perform assertions on a given dir.
     *
     * @param path - The directory path.
     */
    function dir(...path: string[]): DirWrapper
  }
}

export default expected
