"use strict";
// let a:number = 10;
// let fun = () => {
// }
let value = 10;
function calculate(value) {
    if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else if (typeof value === "number") {
        return value + 21;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
    return value;
}
