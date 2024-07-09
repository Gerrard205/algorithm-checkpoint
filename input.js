

 //Sum of Array: Create a function that calculates the sum of all elements in an array.//
  
 function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Sum of array elements:", sumArrayElements(numbers));


//Filter Array: Implement a function that filters out elements from an array based on a given condition//

function filterArray(arr, conditionFunc) {
  return arr.filter(conditionFunc);
}
var numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numberss, function(num) {
  return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);


//Reverse a String: Write a function that reverses a given string.//

function reversedstr(str){
  let result ='';
  for(let char of str){
      result = char+result
  }
  return result
}

reversedstr('gerrard')



//Count Characters: Create a function that counts the number of characters in a string//
function countCharactersWithoutSpaces(inputString) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== ' ') {
          count++;
      }
  }
  return count;
}


let inputStr = "Hello World";
console.log("Number of characters (excluding spaces):", countCharactersWithoutSpaces(inputStr));




//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.//
function capWord(string){
  let word = string.split("")
  for(let i = 0; i < word.length; i++){
      word[i] = word[i][0]. toUpperCase() + word[i].substr()
  }
  return word.join("")
}

console.log(capWord('string gun'))


