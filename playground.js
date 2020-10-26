'use strict';

const countSheep = (num) => {
  if (num === 0) {
    return 'All sheep jumped over the fence';
  }

  return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
};

console.log(countSheep(2));

/**
 * Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
 */

const powerCalculator = (num, power) => {
  if (num < 0) return 'exponent should be >= 0';
};