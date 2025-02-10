"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function sumWhile(numbers) {
    let i = 0;
    let sum = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
function sumRecursion(numbers, i = 0) {
    if (i >= numbers.length) {
        return 0;
    }
    return numbers[i] + sumRecursion(numbers, i + 1);
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumFor([1, 2, 3, 4])); // 10
console.log(sumWhile([1, 2, 3, 4])); // 10
console.log(sumRecursion([1, 2, 3, 4])); // 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // 10
