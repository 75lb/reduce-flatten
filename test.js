const flatten = require('./')
const Tom = require('test-runner').Tom
const a = require('assert')

const tom = module.exports = new Tom('test')

tom.test('flatten', function () {
  const numbers = [1, 2, [3, 4], 5]
  const result = numbers.reduce(flatten, [])
  a.deepStrictEqual(result, [1, 2, 3, 4, 5])
})
