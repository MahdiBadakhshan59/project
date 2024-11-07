"use strict";

console.log(`it's working`);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// استفاده:
let randomNumber = getRandomNumber(1, 10); // عددی تصادفی بین 1 و 10 (شامل هر دو مقدار)
console.log(randomNumber);