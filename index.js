
/**
 * Module dependencies
 */

var define = Object.defineProperty


/**
 * cached read bits
 */

var cache = {}


/**
 * reads an int and returns an index bit
 *
 * @api public
 * @param {Number} `i`
 */

BitFlag.read = read;
function read (i) {
	if (cache[i]) return cache[i];
	else return { index: (i/32)|0, bit: i%32 };
}


/**
 * Expose `BitFlag`
 *
 * @api public
 * @param {Number} `i` - optional
 */

module.exports = BitFlag;
function BitFlag (i) {
  if (!(this instanceof BitFlag)) return new BitFlag(i);
  this.field = [];
  define(this, 'length', { get: function () { return this.field.length; }});
  if ('number' === typeof i) this.set(i);
}


/**
 * Checks if int is in bit field
 * 
 * @api public
 * @param {Number} `i`
 */

BitFlag.prototype.isset = 
BitFlag.prototype.has = function (i) {
	return 0 !== (this.field[read(i).index] & read(i).bit);
};


/**
 * Removes a bit from the field
 *
 * @api public
 * @param {Number} `i`
 */

BitFlag.prototype.unset = 
BitFlag.prototype.remove = function (i) {
  this.field[read(i).index] &= ~read(i).bit;
  return this;
};


/**
 * Sets a bit to the field
 *
 * @api public
 * @param {Number} `i`
 */

BitFlag.prototype.add =
BitFlag.prototype.set = function (i) {
  this.field[read(i).index] |= read(i).bit;
  return this;
};



/**
 * Clears the bit field
 *
 * @api public
 */

BitFlag.prototype.clear = function () {
  this.field = [];
  return this;
};