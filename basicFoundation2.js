// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr[i] = 'big'
    }
  }
  return arr;
}
// console.log(makeItBig([-1,3,5,-5]))

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr) {
  let lowestVal = arr[0];
  let highestVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestVal) {
      highestVal = arr[i]
    } else if (arr[i] < lowestVal) {
      lowestVal = arr[i]
    }
  }
  console.log(lowestVal);
  return highestVal;
}
// console.log(lowHigh([1,-4,50,-400]))

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printReturn(arr){
  console.log(arr[arr.length-2]);
  for (var i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 1){
          return arr[i];
      }
  }
}
// console.log(printReturn([6,3,7,8,9,32,5]));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
//  console.log(double([1,2,3]));

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr) {
  let positivesCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivesCount++;
      arr[arr.length - 1] = positivesCount;
    }
  }
  return arr
}
// console.log(countPositives([-1,1,1,1]))

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function oddsEvens(arr) {
  let evensCount =0;
    let OddsCount = 0;
  for(let i=0; i<arr.length;i++) {
    if(arr[i] % 2 !== 0) {
      OddsCount++;
    }else {
      evensCount++;
    }
    if(OddsCount === 3) {
      console.log("That is odd!")
      OddsCount =0;
    }  else if(evensCount === 3) {
      console.log('Even more so!')
      evensCount =0;
    }
  }
}
// oddsEvens([1,3,5,7,5,3,4,4,4,3,5,9,2,2,10])

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function IncrementSec(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] += 1;
      console.log(arr[i])
    }
  }
  return arr
}
// console.log(IncrementSec([1,2,3,4,5]))

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length;
  }
  return arr;
}
// console.log(previousLengths(['hello', 'dojo','ru']))

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 7)
  }
  return newArr;
}
// console.log(addSeven([1,2,3]))

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  return reversedArr;
}
// console.log(reverse([3,1,6,4,2]))

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function loveNegatives(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(-arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
// console.log(loveNegatives([1,-3,5]))

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(arr) {

  for (let i = 0; i < arr.length; i++) {
    var notHungry = false;
    if (arr[i] === 'food') {
      console.log('yummy')
      notHungry = true;
    } 
  }
  if(notHungry === false) {
    console.log("I'm hungry!")
  }
}
// hungry([1, 3, 'food'])

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  let temp2 = arr[2];
  arr[2] = arr[arr.length-3];
  arr[arr.length-3] = temp2;
  
}
// console.log(swapTowardCenter([1,2,3,4,5,6]))

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * num)
  }
  return newArr
}
// console.log(scaleArray([1,2,3], 3))