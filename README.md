[![view on npm](http://img.shields.io/npm/v/reduce-flatten.svg)](https://www.npmjs.org/package/reduce-flatten)
[![npm module downloads](http://img.shields.io/npm/dt/reduce-flatten.svg)](https://www.npmjs.org/package/reduce-flatten)
[![Build Status](https://travis-ci.org/75lb/reduce-flatten.svg?branch=master)](https://travis-ci.org/75lb/reduce-flatten)
[![Dependency Status](https://david-dm.org/75lb/reduce-flatten.svg)](https://david-dm.org/75lb/reduce-flatten)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_reduce-flatten"></a>
## reduce-flatten
  
**Example**
```js
var flatten = require('reduce-flatten')
```


<a name="module_reduce-flatten..flatten"></a>
### reduce-flatten~flatten(prev)
flatten an array of arrays into the supplied array.

**Kind**: inner method of [`reduce-flatten`](#module_reduce-flatten)  

| Param | Type    | Description     |
| ----- | ------- | --------------- |
| prev  | `Array` | the input array |


**Example**
```js
> numbers = [ 1, 2, [ 3, 4 ], 5 ]
> numbers.reduce(flatten, [])
[ 1, 2, 3, 4, 5 ]
```




* * *

&copy; 2016 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
