"use strict";
function demo(a, b = 234, c) {
    return (a + b + (c || 0));
}
console.log(demo(100));
console.log(demo(200, undefined, 300));
