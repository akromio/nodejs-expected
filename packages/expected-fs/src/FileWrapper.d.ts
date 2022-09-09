type text = string

/**
 * A wrapper to perform assertions on a file.
 */
export default class FileWrapper {
  /**
   * Asserts the file should exist.
   */
  toExist(): this

  /**
   * Asserts the file shouldn't exist.
   */
  notToExist(): this

  /**
   * Asserts the file should include one o more given texts.
   *
   * @param texts - Texts to check.
   */
  toContain(texts: any[]): this

  /**
   * Asserts the file should include one o more given texts.
   *
   * @param texts - Texts to check.
   */
  toContain(...texts: any[]): this

  /**
   * Asserts the file should include one o more given texts.
   *
   * @param texts - Texts to check.
   */
  toInclude(texts: any[]): this

  /**
   * Asserts the file should include one o more given texts.
   *
   * @param texts - Texts to check.
   */
  toInclude(...texts: any[]): this

  /**
   * Asserts the file shouldn't include one or more given texts.
   *
   * @param texts - Texts to check.
   */
  notToContain(texts: any[]): this

  /**
   * Asserts the file shouldn't include one or more given texts.
   *
   * @param texts - Texts to check.
   */
  notToContain(...texts: any[]): this

  /**
   * Asserts the file shouldn't include one or more given texts.
   *
   * @param texts - Texts to check.
   */
  notToInclude(texts: any[]): this

  /**
   * Asserts the file shouldn't include one or more given texts.
   *
   * @param texts - Texts to check.
   */
  notToInclude(...args: any[]): this

  /**
   * Asserts the file should be empty.
   */
  toBeEmpty(): this

  /**
   * Asserts the file shouldn't be empty.
   */
  notToBeEmpty(): this

  /**
   * Asserts the file content should be a JSON.
   */
  toBeJson(): this

  /**
   * Asserts the file content should be a given one.
   *
   * @param text - Content to check.
   */
  equalTo(text: text): this

  /**
   * Asserts the file content shouldn't be a given one.
   *
   * @param text - Content to check.
   */
  notEqualTo(text: text): this

  /**
   * Asserts the file content should be the same as another file.
   *
   * @param path - File path with the content to check.
   */
  equalToFile(path: text): this

  /**
   * Asserts the file content shouldn't be the same as another file.
   *
   * @param path - File path with the content to check.
   */
  notEqualToFile(path: text): this

  /**
   * Asserts the file content should start with a given text.
   *
   * @param prefix - Prefix to check.
   */
  toStartWith(prefix: text): this

  /**
   * Asserts the file content shouldn't start with a given text.
   *
   * @param prefix - Prefix to check.
   */
  notToStartWith(prefix: text): this

  /**
   * Asserts the file content should end with a given text.
   *
   * @param suffix - Suffix to check.
   */
  toEndWith(suffix: text): this

  /**
   * Asserts the file content shouldn't end with a given text.
   *
   * @param suffix - Suffix to check.
   */
  notToEndWith(suffix: text): this
}
