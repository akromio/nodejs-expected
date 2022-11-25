type text = string

/**
 * A wrapper for performing assertions on a path.
 */
export default class PathWrapper {
  /**
   * Checks whether the path is this given.
   *
   * If Windows and drive letter indicated, this is removed for the check.
   *
   * @param p - Other path to check.
   */
  equalTo(p: text): this

  /**
   * Checks whether the path is absolute.
   */
  toBeAbsolute(): this
}
