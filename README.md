*This repository is a mirror of the [component](http://component.io) module [jwerle/bitflag](http://github.com/jwerle/bitflag). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jwerle-bitflag`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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

## example

```js
var bf = BitFlag();

// flags
const FLAG1 = (1 << 0)
    , FLAG2 = (1 << 1)
    , FLAG3 = (1 << 2)
    , FLAG4 = (1 << 3)
    , FLAG5 = (1 << 4)

bf.set(FLAG1);
bf.set(FLAG2|FLAG4);

if (bf.has(FLAG2)) {
	console.log('has flag 2');
}

if (bf.has(FLAG1)) {
	console.log('has flag 1');
}

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
assert(false === bf.has(128));
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