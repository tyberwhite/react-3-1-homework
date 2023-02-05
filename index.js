// Day 12
// React 3.1 - Homework
// J.T.W.

// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(arg1, arg2) {
  return arg1 >= arg2 ? arg1 : arg2;
}
console.log(maxOfTwoNumbers(3, 9)); // 9
console.log(maxOfTwoNumbers(4, 4)); // 4
console.log(maxOfTwoNumbers(11, 6)); // 11

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (num1, num2, num3) {
  let largest = num1;

  if (num2 > largest) {
    largest = num2;
  }

  if (num3 > largest) {
    largest = num3;
  }
  return largest;
};

console.log(maxOfThree(4, 8, 2)); // 8
console.log(maxOfThree(1, 16, 9)); // 16

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  const vowels = "aeiou";
  return vowels.includes(char.toLowerCase());
}

console.log(isCharAVowel("a")); // true
console.log(isCharAVowel("d")); // false

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = function (arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(sumArray([2, 4, 5])); // 11
console.log(sumArray([1, 24, 18])); // 43

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(arr) {
  let product = 1;
  arr.forEach((num) => {
    product *= num;
  });
  return product;
}

console.log(multiplyArray([2, 4, 5])); // 40
console.log(multiplyArray([4, 4, 4])); // 64

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function () {
  return arguments.length;
};

console.log(numArgs("one", "two", "three")); // 3

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

console.log(reverseString("rockstar")); // ratskcor
console.log(reverseString("racecar")); // racecar

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (arr) {
  let longestString = 0;
  arr.forEach((element) => {
    if (element.length > longestString) {
      longestString = element.length;
    }
  });
  return longestString;
};

console.log(longestStringInArray(["hello", "world", "this", "is", "Jeopardy"])); // 8

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
  const newArr = arr.filter((element) => element.length > num);
  return newArr;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3)); // [ 'hello', 'morning' ]
