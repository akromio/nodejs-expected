import ValuesWrapper from "./ValuesWrapper"

type list = any[]
type map = any
type num = number
type text = string

/**
 * A value wrapper for performing assertions.
 */
export default class ValueWrapper {
  /**
   * Returns a wrapper for an item, considering that the current wrapper is a list.
   *
   * @param i - The index.
   */
  item(i: num): this

  /**
   * Alias for item.
   */
  it(i: num): this

  /**
   * Alias for item(0).
   */
  get first(): this

  /**
   * Alias for item(1).
   */
  get second(): this

  /**
   * Returns a wrapper for the items if list.
   */
  items(...indexes: num[]): ValuesWrapper

  /**
   * Returns a wrapper for a member.
   *
   * @param name - The member name.
   */
  member(name: text): this

  /**
   * Returns a wrapper for the members.
   */
  members(...names: string[]): ValuesWrapper

  /**
   * Returns a wrapper for the value from an expression.
   *
   * @param exp - The access expression.
   */
  get(exp: text | num): this

  /**
   * Returns a wrapper for the value length.
   */
  len(): this

  /**
   * Asserts that an error should be raised.
   *
   * @param err - The error or the error type.
   */
  toThrow(err?: any): this

  /**
   * Alias for toThrow().
   */
  toRaise(err?: any): this

  /**
   * Asserts that a given error should not be raised.
   *
   * @param err - The error or the error type to check.
   */
  notToThrow(err?: any): this

  /**
   * Alias for notToThrow().
   */
  notToRaise(err?: any): this

  /**
   * Checks whether the value is an instance of a given type.
   */
  toBeInstanceOf(Type: any): this

  /**
   * Alias for toBeInstanceOf().
   */
  toBe(Type: any): this

  /**
   * Checks whether the value is not instance of a given type.
   */
  notToBeInstanceOf(Type: any): this

  /**
   * Alias for notToBeInstanceOf().
   */
  notToBe(Type: any): this

  /**
   * Checks whether the value is a duplex stream.
   */
  toBeDuplexStream(): this

  /**
   * Checks whether the value is not a duplex stream.
   */
  notToBeDuplexStream(): this

  /**
   * Checks whether the value is a readable stream.
   */
  toBeReadableStream(): this

  /**
   * Checks whether the value is not a readable stream.
   */
  notToBeReadableStream(): this

  /**
   * Checks whether the value is null or nil.
   */
  toBeNull(): this

  /**
   * Alias for toBeNull().
   */
  toBeNil(): this

  /**
   * Checks whether the value is not null or nil.
   */
  notToBeNull(): this

  /**
   * Alias for notToBeNull().
   */
  notToBeNil(): this

  /**
   * Check whether the value is a boolean.
   */
  toBeBoolean(): this

  /**
   * Alias for toBeBoolean().
   */
  toBeBool(): this

  /**
   * Checks whether the value is not a boolean.
   */
  notToBeBoolean(): this

  /**
   * Alias for notToBeBoolean().
   */
  notToBeBool(): this

  /**
   * Checks whether the value is a date.
   */
  toBeDate(): this

  /**
   * Alias for toBeDate().
   */
  toBeTimestamp(): this

  /**
   * Checks whether the value is not a date.
   */
  notToBeDate(): this

  /**
   * Alias for notToBeDate().
   */
  notToBeTimestamp(): this

  /**
   * Checks whether the value is a string or text.
   */
  toBeString(): this

  /**
   * Alias for toBeString().
   */
  toBeText(): this

  /**
   * Checks whether the value is not a string or text.
   */
  notToBeString(): this

  /**
   * Alias for notToBeString().
   */
  notToBeText(): this

  /**
   * Checks whether the value is a number.
   */
  toBeNumber(): this

  /**
   * Alias for toBeNumber().
   */
  toBeNum(): this

  /**
   * Checks whether the value is not a number.
   */
  notToBeNumber(): this

  /**
   * Alias for notToBeNumber().
   */
  notToBeNum(): this

  /**
   * Checks whether the value is an array or list.
   */
  toBeArray(): this

  /**
   * Alias for toBeArray().
   */
  toBeList(): this

  /**
   * Checks whether the value is not an array or list.
   */
  notToBeArray(): this

  /**
   * Alias for notToBeArray().
   */
  notToBeList(): this

  /**
   * Checks whether the value is a set.
   */
  toBeSet(): this

  /**
   * Checks whether the value is not a set.
   */
  notToBeSet(): this

  /**
   * Checks whether the value is an object or map.
   */
  toBeObject(): this

  /**
   * Alias for toBeMap().
   */
  toBeMap(): this

  /**
   * Checks whether the value is not an object or map.
   */
  notToBeObject(): this

  /**
   * Alias for notToBeMap().
   */
  notToBeMap(): this

  /**
   * Checks whether the value is a promise.
   */
  toBePromise(): this

  /**
   * Checks whether the value is not a promise.
   */
  notToBePromise(): this

  /**
   * Checks whether the value is a function.
   */
  toBeFunction(): this

  /**
   * Alias for toBeFunction().
   */
  toBeFn(): this

  /**
   * Checks whether the value is not a function.
   */
  notToBeFunction(): this

  /**
   * Alias for notToBeFunction().
   */
  notToBeFn(): this

  /**
   * Checks whether the value is callable.
   */
  toBeCallable(): this

  /**
   * Checks whether the value is not callable.
   */
  notToBeCallable(): this

  /**
   * Checks whether the value is equal to another.
   */
  equals(another?: any): this

  /**
   * Alias for equals().
   */
  equalTo(another?: any): this

  /**
   * Checks whether the value is not equal to another.
   */
  notEquals(another?: any): this

  /**
   * Alias for notEquals().
   */
  notEqualTo(another?: any): this

  /**
   * Checks whether the value is the same as another.
   */
  sameAs(another: any): this

  /**
   * Checks whether the value is not the same as another.
   */
  notSameAs(another: any): this

  /**
   * Checks whether the value is less than another.
   */
  lessThan(another: any): this

  /**
   * Checks whether the value is less than or equal to another.
   */
  lessThanOrEqualTo(another: any): this

  /**
   * Checks whether the value is greater than or equal to another.
   */
  greaterThan(another: any): this

  /**
   * Checks whether the value is greater than or equal to another.
   */
  greaterThanOrEqualTo(another: any): this

  /**
   * Checks whether the value is between two values.
   */
  between(val1: any, val2: any): this

  /**
   * Checks whether the value is not between two values.
   */
  notBetween(val1: any, val2: any): this

  /**
   * Checks whether the value includes one item.
   */
  toContain(item?: any): this

  /**
   * Alias for toContain().
   */
  toInclude(item?: any): this

  /**
   * Checks whether the value doesn't include one item.
   */
  notToContain(item?: any): this

  /**
   * Alias for notToContain().
   */
  notToInclude(item?: any): this

  /**
   * Checks whether the value is into another.
   */
  toBeIn(another: list): this

  /**
   * Checks whether the value is not into another.
   */
  notToBeIn(list: list): this

  /**
   * Alias for notToBeIn().
   */
  notIn(list: list): this

  /**
   * Checks whether the value has one or several members.
   */
  toHave(members: text | list | map): this

  /**
   * Checks whether the value doesn't have one or several members.
   */
  notToHave(members: text | list | map): this

  /**
   * Checks whether the value is empty, that is, length is 0 or empty string.
   */
  toBeEmpty(): this

  /**
   * Checks whether the value is not empty, that is, it has items.
   */
  notToBeEmpty(): this

  /**
   * Checks whether the value has a given length.
   */
  toHaveLength(size: num | list): this

  /**
   * Alias for toHaveLength().
   */
  toHaveLen(size: num | list): this

  /**
   * Checks whether the value has not a given length.
   */
  notToHaveLength(size: num | list): this

  /**
   * Alias for notToHaveLength().
   */
  notToHaveLen(size: num | list): this

  /**
   * Checks whether the value is similar to other.
   */
  similarTo(other: any): this

  /**
   * Checks whether the value is not similar to other.
   */
  notSimilarTo(other: any): this

  /**
   * Checks whether the value matches a given pattern.
   */
  toMatch(pattern: text): this

  /**
   * Alias for toMatch().
   */
  like(pattern: text): this

  /**
   * Checks whether the value does not match a given pattern.
   */
  notToMatch(pattern: text): this

  /**
   * Alias for notToMatch().
   */
  notLike(pattern: text): this

  /**
   * Checks whether the value starts with a given prefix.
   */
  toStartWith(prefix: text): this

  /**
   * Checks whether the value doesn't start with a given prefix.
   */
  notToStartWith(prefix: text): this

  /**
   * Checks whether the value ends with a given suffix.
   */
  toEndWith(suffix: text): this

  /**
   * Checks whether the value doesn't end with a given suffix.
   */
  notToEndWith(suffix: text): this

  /**
   * Checks whether the promised value has been fulfilled,
   * returning a new value wrapper for the value returned.
   *
   * @example
   * ```typescript
   * (await expected(value).fulfilled()).equalTo(123)
   * ```
   */
  fulfilled(): Promise<this>

  /**
   * Checks whether the promised value has been rejected,
   * returning a new value wrapper for the error raised.
   *
   * @example
   * ```typescript
   * (await expected(value).rejected()).equalTo(new Error("message"))
   * ```
   */
  rejected(): Promise<this>

  /**
   * Checks whether the value is a valid UUID.
   */
  toBeUuid(): this
}
