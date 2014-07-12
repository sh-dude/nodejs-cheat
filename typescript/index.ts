// Any valid JavaScript is valid TypeScript but not vise versa.

// To require a Node.js module you need to have a declaration file that should
// define API of the module. Let's try it for the 'assert' (http://nodejs.org/api/assert.html)
// module.

// Use a special ///<reference path="..."/> comment to say where the file is located. The path
// is resolved relative to the directory of this file.
///<reference path='assert.d.ts' />

// After that the 'require' statement can be used as follows:
import assert = require('assert')

assert.ok(true)

// Function can have type hinting:
function returnAsIs(s: string) {
    return s
}

assert.strictEqual(returnAsIs("my test"), "my test")

// The following types for typehinting are also useful:
// - number
// - string
// - boolean
function add(a: number, b: number) {
    return a + b
}
assert.strictEqual(add(2, 3), 5)

// A type for the return value can be specified:
function returnAsIs_v1(s: string): string {
    return s
}
assert.strictEqual(returnAsIs_v1("foo"), "foo")

// The `any` type can also be used in any case where any value can be used.
// The signature of the next function is equivalent to this one: function returnAsIs_v2(v)
function returnAsIs_v2(v: any): any {
    return v
}
assert.strictEqual(returnAsIs_v2(false), false)
assert.strictEqual(returnAsIs_v2(undefined), undefined)
assert.strictEqual(returnAsIs_v2(null), null)

/*
var myFunc1 = function (h: number, w: number) {
        return h * w;

};

var myFunc2 = (h: number, w: number) => h * w;
*/
