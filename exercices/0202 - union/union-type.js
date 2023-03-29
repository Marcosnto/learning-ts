"use strict";
// Beggine - Union type
let total = 200;
total = "4000";
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        return Math.random();
    }
    else {
        throw new Error("The value must be a number or a string");
    }
}
const button = document.querySelector("button");
button?.click();
// Finish - Union type
