/// <reference types="node" />

/**
 * Runs a function in protected mode.
 *
 * @param fun - The function object to call.
 */
export default function peval(fun: () => any): [boolean, any]
