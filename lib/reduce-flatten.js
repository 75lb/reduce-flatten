'use strict'

/**
 * @module reduce-flatten
 * @example
 * var flatten = require('reduce-flatten')
 */
module.exports = flatten

/**
 * flatten an array of arrays into the supplied array.
 *
 * @param {Array} - the input array
 * @example
 * > numbers = [ 1, 2, [ 3, 4 ], 5 ]
 * > numbers.reduce(flatten, [])
 * [ 1, 2, 3, 4, 5 ]
 */
function flatten (prev, curr) {
  return prev.concat(curr)
}
