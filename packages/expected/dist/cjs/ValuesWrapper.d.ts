type list = any[]
type text = string
type map = object

/**
 * A value wrapper for performing assertions.
 */
export default class ValuesWrapper {
  /**
   * Checks whether the value is an instance of a given type.
   */
  toBeInstanceOf(Type: any): this

  /**
   * Alias for toBeInstanceOf().
   */
  toBe(Type: any): this

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
   * Checks whether the values are valid UUIDs.
   */
  toBeUuid(): this

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
   * Checks whether the value is into another.
   */
  into(another: list): this

  /**
   * Checks whether the value is not into another.
   */
  notInto(list: list): this

  /**
   * Checks whether the value has one or several members.
   */
  toHave(members: text | list | map): this

  /**
   * Checks whether the value doesn't have one or several members.
   */
  notToHave(members: text | list | map): this

  /**
   * Checks whether the values are empty, that is, length is 0 or empty string.
   */
  toBeEmpty(): this

  /**
   * Checks whether the values are not empty, that is, it has items.
   */
  notToBeEmpty(): this
}
