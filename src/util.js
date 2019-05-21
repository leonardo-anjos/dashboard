import { keys, filter, pick, equals, compose } from 'ramda';

/**
 * Empty function.
 * Points to nothing.
 * Runs nothing.
 */
export const limbo = () => {};

/**
 * Calls an function.
 * @param {Function} fn Function to call.
 * @return {*} Returns of fn execution. 
 */
export const invoke = fn => fn();

/**
 * Receives and value and returns it.
 * @param {*} i Item. 
 * @return {*} Item.
 */
export const identity = i => i;

/**
 * @param {*} obj Any object that have an id.
 * @return Id value or obj otherwise.
 */
export const id = obj => (obj || {}).id !== undefined ? obj.id : obj;

/**
 * Curries an function to compare another items (j) to an item (i) by id property.
 * Ex:
 * const foo = { id: 'foo' }
 * const foo2 = { id: 'foo' }
 * const bar = { id: 'bar' }
 * const cmpFoo = byId(foo)
 * cmpFoo(foo2) // true
 * cmpFoo(bar) // false
 * cmpFoo(null) // false
 * 
 * @param {*} i Item comparable.
 * @return {Function} function to compare another items (j) to an item (i).
 */
export const byId = i => j => id(i) === id(j);

/**
 * Curries an function to invert your value.
 * Ex:
 * const fn = () => true;
 * const notFn = not(fn);
 * notFn() // false
 * not(notFn)() // true
 * 
 * @param {Function} fn Function to invert.
 * @return {Function} inverse of function.
 */
export const not = fn => (...args) => !fn(...args);

/**
 * Converts a value to a integer.
 * Created to avoid pass '10' in every convertion.
 * @param {*} value A value.
 */
export const toInt = value => parseInt(value, 10);

/**
 * Removes an item from an list based on your id property.
 * @param {Array} list List to remove from.
 * @param {Object} item Item to remove.
 * @return {Array} A new list without item (if exists).
 */
export const removeById = (list, item) => 
  ( list || [] ).filter(not(byId(item)));

/**
 * Repalces an item from an list based on your id property.
 * @param {Array} list List to replace in.
 * @param {Object} item Item to replace.
 * @return {Array} A new list with items replaced if id match occurs.
 */
export const replaceById = (list, item) => 
  (list || []).map(jtem => (id(jtem) === id(item) && item) || jtem);

/** 
 * Works like replaceById, but instead of replace totally, 
 * it spread properties (merge).
 * @param {Array} list List to spread in.
 * @param {Object} item Item to spread.
 * @return {Array} A new list with items updated if id match occurs.
*/
export const spreadById = (list, item) =>
  (list || []).map(jtem => (id(jtem) === id(item) && {...jtem, ...item}) || jtem);

/**
 * Computes the difference from one object to another.
 * Ex:
 * objectDiff({a: 2}, {a: 3}) // {a: 2}
 * objectDiff({a: 3}, {b: 4}) // {a: 3}
 * objectDiff({}, {o: 9}) // {}
 * @param {Object} from Origin of analysis.
 * @param {Object} to Use to check.
 * @return {Object} Object that contains the differences { prop: value of from }.
 */
export const objectDiff = (from, to) => {
  const eq = k => equals(from[k], to[k]);
  const pickFrom = keys => pick(keys, from);
  return compose(
    pickFrom,
    filter(not(eq)),
    keys
  )(from)
};

/**
 * Check if a object is promise
 * @param {Object} obj Target of check.
 * @return {Boolean} true if obj is promise. Returns false otherwise.
 */
export const isPromise = obj => 
  // not null
  !!obj && 
  // is object
  typeof obj === 'object' &&
  // '.then' is function 
  typeof obj.then ===  'function';


/**
 * Resolve an target that can be an promise or a boolean value.
 * @param {*} target A promise or boolean to be analyzed.
 * @param {Function} success Callback executed when true or resolve.
 * @param {Function} failure Callback executed when false or reject.
 */
export const resolvePromiseOrBoolean = (target, success = limbo, failure = limbo) => {
  if ( isPromise(target) ) { 
    // is promise
    target.then(success, failure);
  } else {
    // isn't promise
    if (target) success();
    else failure();
  }
};

/**
 * Throws an exception when argument is not present.
 * 
 * Hot to user:
 * const method = ( arg = requiredArg('arg') ) => doStuff(arg);
 * 
 * @param {String} argName Name of argument. 
 */
export const requiredArg = (argName = 'argument') => {
  throw new Error(`${argName} is required`);
};

/**
 * Joins texts with ', ' as glue.
 * 
 * The last two texts are joinned with ' e ' as glue.
 * 
 * Single item arrays has item itself as result.
 * 
 * Empty array has '' as result.
 * 
 * @param {*} texts An array of texts to be joinned.
 */
export const prettyJoin = texts => {
  if (!texts) return '';
  switch (texts.length) {
    case undefined:
    case 0: return '';
    case 1: return texts[0];
    default:
      const commaSeparated = texts.slice(0, -1).join(', ');
      return `${commaSeparated} e ${texts[texts.length - 1]}`;
  }
};

/**
 * Creates an input event from a value.
 * @param {*} value 
 * @return event in the format of a input event containing value argument as it value.
 */
export function synthetizeEvent(value) {
  return {
    target: {
      value
    }
  }
}
