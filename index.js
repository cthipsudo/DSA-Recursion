'use strict';

console.log('Hello');

const sumOf = function (list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));

};

let lst = [2, 4, 6, 8, 10];
//console.log(sumOf(lst));

function countDown(from) {
  // Base Case
  if (from === 0) {
    return;
  }
  // General Case 
  //console.log("countdown",from);
  countDown(from - 1);
  //console.log("countup",from);
}

countDown(5);

function doubler(arr){
  if(arr.length === 0){
    return arr;
  }
  const firstDoubled = arr[0] * 2;
  const remaining = arr.slice(1);
  
  return [firstDoubled, ...doubler(remaining)];
}

console.log(doubler([1,2,3]));

function doublerNCounter(arr, counter){
  if(counter === arr.length){
    return arr;
  }
  arr[counter] = arr[counter] * 2;
  doublerNCounter(arr, counter + 1);
  return arr;
}

//console.log(doublerNCounter([1,2,3], 0));

const countSheep = (num) => {
  if(num === 0){
    return 'All sheep jumped over the fence';
  }

  return `${num}: Another sheep jumps over the fence\n` + countSheep(num -1);
};

//console.log(countSheep(2));