type text = string

/**
 * A wrapper to perform assertions on a dir.
 */
export default class DirWrapper {
  /**
   * Asserts the dir should exist.
   */
  toExist(): this

  /**
   * Asserts the dir shouldn't exist.
   */
  notToExist(): this

  /**
   * Asserts the dir should have a given entry.
   *
   * @param entry - Entry name to check.
   */
  toHave(entry: text): this

  /**
   * Asserts the dir should have several given entries.
   *
   * @param entries - Entry names to check.
   */
  toHave(entries: text[]): this

  /**
   * Asserts the dir shouldn't have a given entry.
   *
   * @param entry - Entry name to check.
   */
  notToHave(entry: text): this

  /**
   * Asserts the dir shouldn't have several given entries.
   *
   * @param entries - Entry names to check.
   */
  notToHave(entries: text[]): this
}
