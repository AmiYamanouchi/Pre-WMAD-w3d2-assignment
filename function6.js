// write a function that takes the last item of the second array, and adds it to the end of the first array.
let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

let numbers = ['1', '2', '3', '4'];

// const addTheLast = function (arr) {
//    console.log(food.concat(numbers[3]))
// }

const addTheLast = function (arr1, arr2) {
   let arr2index = arr2.length - 1;
   arr1.push(arr2[arr2index]);
   console.log(arr1);
}

addTheLast(food, numbers);
