function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

var fruit = ["apple", "banana", "Cherry"];
var sortedFruit = ["banana", "apple", "Cherry"];


function byLastLetter(a, b) {
  if (a.split('').reverse()[0] < b.split('').reverse()[0]) {
    return -1;
  }
  if (a.split('').reverse()[0] > b.split('').reverse()[0]) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
function lastLetterSort(stringArray) {
  // function byLastLetter(array) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
    return stringArray.sort(byLastLetter);
  // }

  // stringArray.sort(byLastLetter);
}
assert(lastLetterSort(fruit)[0] === sortedFruit[0], "sort those fruits!");
assert(lastLetterSort(fruit).length === sortedFruit.length, "not enough fruits!");
// console.log(lastLetterSort(fruit));
// console.log(sortedFruit);
var scores = [1, 2, 10, 21]; 
function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(element, index, array){
  	sum += element;
  })
  return sum;
}
assert(sumArray(scores) > 21, "too small!");
assert(sumArray(scores) === 34, "not 34.");
console.log(sumArray(scores));

var allScores = [[19, 2, 101, 213],[1, 2, 10, 21],[11, 3, 11, 211]];
function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a,b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    if (sumArray(a) < sumArray(b)) {
    return -1;
  }
  if (sumArray(a) > sumArray(b)) {
    return 1;
  }
  // a must be equal to b
  return 0;
  });
}
assert(sumSort(allScores)[0][3] === 21, "or it'll be the other...");
assert(sumSort(allScores)[1][3] === 211, "or it'll be the other...");
