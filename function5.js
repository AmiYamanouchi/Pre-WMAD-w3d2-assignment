// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (arr) {
    arr.forEach(x => {
        x += 'HOORAY';
        console.log(x);

    })
};

addHooray(food);

