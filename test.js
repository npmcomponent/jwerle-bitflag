
/**
 * Module dependencies
 */

var bflag = require('./')
  , assert = require('assert')
  , bf = bflag()


// test bflags
const FLAG1 = (1 << 0)
    , FLAG2 = (1 << 1)
    , FLAG3 = (1 << 2)
    , FLAG4 = (1 << 3)
    , FLAG5 = (1 << 4)

// set flag 1
bf.set(FLAG1);
// test that it was actually set
assert(bf.has(FLAG1))
// unset flag 1
bf.unset(FLAG1);
// test it was actually unset
assert(!bf.has(FLAG1));

// set flag 2 and 3 together
bf.set(FLAG2|FLAG3);
// assert flag 2 was set
assert(bf.has(FLAG2));
// assert flag 3 was set
assert(bf.has(FLAG3));
// unset flag 3
bf.unset(FLAG3)
// assert flag 3 was unset;
assert(!bf.has(FLAG3));
// unset flag 2
bf.unset(FLAG2);
// assert flag 2 was unset
assert(!bf.has(FLAG2));

// set flag 4 and 5
bf.set(FLAG4|FLAG5);
// assert flag 4 was set
assert(bf.has(FLAG4));
// assert flag 5 was set
assert(bf.has(FLAG5));

// clear bit flag field
bf.clear();

// test that the length was set to `0`
assert(0 === bf.length)

var b = bflag(FLAG1|FLAG2|FLAG3|FLAG4|FLAG5);

// only one index should be stored
assert(1 === b.length);

assert(b.has(FLAG1));
assert(b.has(FLAG2));
assert(b.has(FLAG3));
assert(b.has(FLAG4));
assert(b.has(FLAG5));

b.set(FLAG2);

// test that the field wasn't changed and the field length
// is still in tact
assert(1 === b.length);

b.unset(FLAG1|FLAG3);
assert(!b.has(FLAG1));
assert(!b.has(FLAG3));
assert(b.has(FLAG2));
assert(b.has(FLAG5));
assert(b.has(FLAG4));
b.unset(FLAG4|FLAG5);
assert(!b.has(FLAG1));
assert(!b.has(FLAG3));
b.unset(FLAG2);
assert(!b.has(FLAG2));