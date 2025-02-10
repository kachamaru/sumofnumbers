function sumFor(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function sumWhile(numbers: number[]): number {
  let i = 0;
  let sum = 0;

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

function sumRecursion(numbers: number[], i = 0): number {
  if (i >= numbers.length) {
    return 0;
  }
  return numbers[i] + sumRecursion(numbers, i + 1);
}

function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumFor([1, 2, 3, 4])); // 10
console.log(sumWhile([1, 2, 3, 4])); // 10
console.log(sumRecursion([1, 2, 3, 4])); // 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // 10
