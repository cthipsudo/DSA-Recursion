/* eslint-disable indent */
'use strict';

const countSheep = (num) => {
  if (num === 0) {
    return 'All sheep jumped over the fence';
  }

  return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
};

//console.log(countSheep(2));

/**
 * Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
 */

const powerCalculator = (num, exp) => {
  if (exp < 0) return 'exponent should be >= 0';
  if (exp === 0) return 1;
  if (exp === 1) return num;
  const newNum = num * num;
  return powerCalculator(newNum, exp - 1);

};

//console.log(powerCalculator(10, 3));

/**
 * Write a function that reverses a string. 
 * Take a string as input, reverse the string, 
 * and return the new string.
 */

const reverseString = (str) => {
  if (str.length === 1) return str;
  const lastIndex = str.length - 1;
  const lastChar = str[lastIndex];

  return [lastChar] + reverseString(str.slice(0, lastIndex));
};

//console.log(reverseString('orange'));

/**
 * Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
 */

const triNum = (num) => {
  if (num === 0) {
    return num;
  }
  //console.log(num);
  return num + triNum(num - 1);
};

//console.log(triNum(5));

/**
 * Write a recursive function that splits a string based on a 
 * separator (similar to String.prototype.split). 
 * Don't use JS array's split function to solve this problem.
 */

const strSplit = (str, char, result = []) => {
  if (str.indexOf(char) === -1) {
    result.push(str);
    return result;
  }
  //console.log(str.indexOf('/'));
  //console.log(str.slice(0, sepIndex));
  //console.log(str.slice(sepIndex + 1));
  const sepIndex = str.indexOf('/');
  const slice = str.slice(0, sepIndex);
  const remaining = str.slice(sepIndex + 1);
  result.push(slice);
  return strSplit(remaining, '/', result);
};

//console.log(strSplit('02/20/2020', "/"));

/**
 * Write a recursive function that prints the Fibonacci sequence of a given number. 
 * The Fibonacci sequence is a series of numbers 
 * in which each number is the sum of the 2 preceding numbers. 
 * For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
 * The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
 */

const fibby = (num) => {
  if (num === 0) {
    return [0];
  }
  // base case
  if (num === 1) {
    return [0, 1];
  }
  //let varOne = ans[ans.length-1]
  //let varTwo = ans[ans.length-2]
  //ans.push(varOne + varTwo);

  let ans = fibby(num - 1);
  ans.push(ans[num - 2] + ans[num - 1]);
  return ans;
};

//console.log(fibby(13));

const factorial = (num) => {
  if (num === 1) {
    return num;
  }

  return num * factorial(num - 1);
};

//console.log(factorial(5));

/**
 * You have entered a Maze and need to find your way out of it. 
 * There are more than one possible paths through the 
 * Maze to the single exit point. Write a recursive function 
 * that will help you find a possible path through the maze.
 */

const makeSmallMaze = () => [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
const makeBigMaze = () => [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeFinder = (maze, n, m) => {
  let player = '-';
  maze[n][m] = player;
  let path = '';
  switch (' ') {
    case maze[n][m + 1]:
      return path += 'R' + mazeFinder(maze, n, m + 1);
      break;
    case maze[n][m - 1]:
      return path += 'L' + mazeFinder(maze, n, m - 1);
      break;
    case maze[n + 1][m]:
      return path += 'D' + mazeFinder(maze, n + 1, m);
      break;
    case maze[n - 1][m]:
      return path += 'U' + mazeFinder(maze, n - 1, m);
      break;
  }
  switch ('e') {
    case maze[n][m + 1]:
      return path += 'R' + ' Completed';
      break;
    case maze[n][m - 1]:
      return path += 'L' + ' Completed';
      break;
    case maze[n + 1][m]:
      return path += 'D' + ' Completed';
      break;
    case maze[n - 1][m + 1]:
      return path += 'U' + ' Completed';
      break;
    default:
      return "Maze Broke";
      break;
  }
};

//console.log(mazeFinder(makeBigMaze(), 0, 0));

const firstAnagrams = (str) => {
  const answer = [];

  const traverse = (str, acc = ' ') => {
    //const dupe = new Set();
    if (!str) {
      answer.push(acc);
    }

    let i = 0;
    while (i < str.length) {
      //console.log(str);
      traverse(str.slice(0, i) + str.slice(i + 1), acc + str[i]);
      i++;
    }
  };

  traverse(str);
  return answer;
};

//console.log(firstAnagrams('abc'));

// const anagrams = (str) => {

//   return str;
// }

// console.log(anagrams('abc'));

const createChart = () => ({
  Zuckerberg: {
    Schroepfer: {
      Bosworth: ['Steve', 'Kyle', 'Andra'],
      Zhao: ['Richie', 'Sofia', 'Jen']
    },
    Schrage: {
      VanDyck: ['Sabrina', 'Michelle', 'Josh'],
      Swain: ['Blanch', 'Tom', 'Joe']
    },
    Sandberg: {
      Goler: ['Eddie', 'Julie', 'Annie'],
      Hernandez: ['Rowi', 'Inga', 'Morgan'],
      Moissinac: ['Amy', 'Chuck', 'Vinni'],
      Kelley: ['Eric', 'Ana', 'Wes']
    }
  }
});

/**
 * Write a recursive function that prints the following organization chart. 
 * Your output should be as shown below with proper indentation to show the hierarchy. 
 * You may store the org chart in an object and send that as an input to your program.
 */

const treePrint = (obj, arr = [], level = 0, index = 0) => {
  //base case is the 'lowest' people
  if (Array.isArray(obj)) {
    //console.log(obj);
    if(obj.length <= 0){ // End of the line
      //console.log(arr);
      //console.log('I get here');
      return arr.join(' ');
    }
    //console.log(obj[0]);
    arr.push(`\t\t\t\t${obj[0]}\n`);
    return treePrint(obj.slice(1), arr);
  }

  switch (level) {
    case 0:
      arr.push(`\t${Object.keys(obj)[index]}\n`);
      break;
    case 1:
      arr.push(`\t\t${Object.keys(obj)[index]}\n`);
      break;
    case 2:
      arr.push(`\t\t\t${Object.keys(obj)[index]}\n`);
      break;
    default:
      break;
  }

  // let workInd = index;
  // console.log(Object.keys(obj)[index]);
  // if(Object.keys(obj)[index + 1] !== undefined){
  //   console.log(`There is someone else on this level`, Object.keys(obj)[index]);
  //    workInd++;
  //   //console.log(Object.keys(obj)[index + 1]);
  //   return treePrint(obj[Object.keys(obj)[workInd]], arr, level, workInd);
  // }else {
    
  // }

  return treePrint(obj[Object.keys(obj)[index]], arr, level + 1, index);
  
};

console.log(treePrint(createChart()));