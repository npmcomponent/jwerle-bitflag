bitflag
=====

Manage bit flags

## install

with npm:

```sh
$ npm install bitflag --save
```

with component:

```sh
$ component install jwerle/bitflag --save
```

## usage

### bitflag(i)

Creates a `BitFlag` instance with a bit field

***example***

```js
var BitFlag = require('bitflag')
  , bf = BitFlag();
```

### #has(i)

Checks if int is in bit field

***example***

```js
assert(false !== bf.has(256));
```

### #unset(i)

Removes a bit from the field

***example***

```js
bf.unset(128);
assert(false === bf.has(256));
```

### #set(i)

Sets a bit to the field

***example***

```js
bf.set(64);
assert(true === bf.has(64));
```


### #clear()

Clears the bit field

***example***

```js
bf.clear();
assert(0 === bf.length);
```


## license

MIT