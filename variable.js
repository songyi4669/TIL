'use strict';

{
let name ='ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);

const count=17; // integer (정수)
const size=17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)﻿
const bigInt=123456789012345678901234567890n; // over (-2**53) ~2*53)
console.log(`value:${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char='c';
const brendan='brendan';
const greeting='hello '+ brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBab=`hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBab}, type: ${typeof helloBab}`);

const canRead=true;
const test=3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

let nothing=null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

let x;
console.log(`value: ${x}, type: ${typeof x}`);

const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);